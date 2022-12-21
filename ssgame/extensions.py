# -*- coding: utf-8 -*-
"""Extensions module. Each extension is initialized in the app factory located in app.py."""
from flask_bcrypt import Bcrypt
from flask_caching import Cache
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_webpack import Webpack
import pusher

pusher_client = pusher.Pusher(
  app_id='677956',
  key='c94fbf647eaf623c10ba',
  secret='0f879745e026ddfc0dbd',
  cluster='us2',
  ssl=True
)

bcrypt = Bcrypt()
login_manager = LoginManager()
# db = SQLAlchemy()
migrate = Migrate()
cache = Cache()
webpack = Webpack()
