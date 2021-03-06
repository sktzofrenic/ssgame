# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask, render_template

from ssgame import commands, public, user
from ssgame.extensions import bcrypt, cache, db, login_manager, migrate, webpack
from ssgame.settings import ProdConfig
import random


def create_app(config_object=ProdConfig):
    """An application factory, as explained here: http://flask.pocoo.org/docs/patterns/appfactories/.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_errorhandlers(app)
    register_shellcontext(app)
    register_commands(app)

    @app.context_processor
    def inject_hash():
        # return dict(build_hash=sha256_checksum(APP_CONFIG.APP_DIR + '/static/build/main.js'))
        return dict(build_hash=random.randint(1, 2000))

    
    @app.context_processor
    def inject_vendor():
        # return dict(build_hash=sha256_checksum(APP_CONFIG.APP_DIR + '/static/build/main.js'))
        fp = open(ProdConfig.APP_DIR + '/static/build/js/chunk-vendors.js', "r")
        content = fp.read()
        fp.close()
        return dict(vendor=content)

    @app.context_processor
    def inject_app():
        # return dict(build_hash=sha256_checksum(APP_CONFIG.APP_DIR + '/static/build/main.js'))
        fp = open(ProdConfig.APP_DIR + '/static/build/js/app.js', "r")
        content = fp.read()
        fp.close()
        return dict(app=content)

    return app


def register_extensions(app):
    """Register Flask extensions."""
    bcrypt.init_app(app)
    cache.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)
    webpack.init_app(app)
    return None


def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(public.views.blueprint)
    app.register_blueprint(user.views.blueprint)
    return None


def register_errorhandlers(app):
    """Register error handlers."""
    def render_error(error):
        """Render error template."""
        # If a HTTPException, pull the `code` attribute; default to 500
        error_code = getattr(error, 'code', 500)
        return render_template('{0}.html'.format(error_code)), error_code
    for errcode in [401, 404, 500]:
        app.errorhandler(errcode)(render_error)
    return None


def register_shellcontext(app):
    """Register shell context objects."""
    def shell_context():
        """Shell context objects."""
        return {
            'db': db,
            'User': user.models.User}

    app.shell_context_processor(shell_context)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    app.cli.add_command(commands.urls)
