# -*- coding: utf-8 -*-
"""Public section, including homepage and signup."""
from flask import Blueprint, flash, redirect, render_template, request, url_for, jsonify
from flask_login import login_required, login_user, logout_user

from ssgame.extensions import login_manager, pusher_client
from ssgame.public.forms import LoginForm
from ssgame.user.forms import RegisterForm
from ssgame.user.models import User, EnglishAbbreviationsKey, EnglishKey, GenreKey, BibleVerse
from ssgame.utils import flash_errors
from ssgame.public.bible_data import json_data
import random

blueprint = Blueprint('public', __name__, static_folder='../static')


@login_manager.user_loader
def load_user(user_id):
    """Load user by ID."""
    return User.get_by_id(int(user_id))


@blueprint.route('/get-bible', methods=['GET', 'POST'])
def get_bible():

    first_book = random.randint(0, 65)

    if first_book == 65:
        second_book = 64
    else:
        second_book = first_book + 1

    first_chapter = random.choice(range(len(json_data[first_book]['chapters'])))
    first_verse = random.choice(range(json_data[first_book]['chapters'][first_chapter]))

    first = BibleVerse.query.filter(
        (BibleVerse.b == first_book + 1) &
        (BibleVerse.c == first_chapter + 1) &
        (BibleVerse.v == first_verse + 1)
    ).first()

    second_chapter = random.choice(range(len(json_data[second_book]['chapters'])))
    second_verse = random.choice(range(json_data[second_book]['chapters'][second_chapter]))

    second = BibleVerse.query.filter(
        (BibleVerse.b == second_book + 1) &
        (BibleVerse.c == second_chapter + 1) &
        (BibleVerse.v == second_verse + 1)
    ).first()
    
    return jsonify({
        'correct': first.serialized,
        'incorrect': second.serialized
    })


@blueprint.route('/api', methods=['GET', 'POST'])
def verse_api():

    if request.args.get('getCurrentQuestion'):
        pusher_client.trigger('ssgame-1', 'updateClients', {})
        print('updating clients')
        return jsonify({
            'status': 'success'
        })
    if request.args.get('newQuestion', None):
        pusher_client.trigger('ssgame-1', 'newQuestion', {
            'question': request.args.get('question')}
        )
        return jsonify({
            'status': 'success'
        })
    if request.args.get('answer', None):
        pusher_client.trigger('ssgame-1', 'answer', {
            'name': request.args.get('name'), 
            'timestamp': request.args.get('timestamp', None), 
            'question': request.args.get('question'), 
            'letterResponse': request.args.get('letterResponse')}
        )
        return jsonify({
            'status': 'success'
        })
    verse = BibleVerse.query.first()
    return jsonify({
        'verse': verse.serialized
    })


@blueprint.route('/', methods=['GET', 'POST'])
def home():
    """Home page."""
    form = LoginForm(request.form)
    # Handle logging in
    if request.method == 'POST':
        if form.validate_on_submit():
            login_user(form.user)
            flash('You are logged in.', 'success')
            redirect_url = request.args.get('next') or url_for('user.members')
            return redirect(redirect_url)
        else:
            flash_errors(form)
    return render_template('public/home.html', form=form)


@blueprint.route('/apple', methods=['GET', 'POST'])
def apple():
    """Home page."""
    form = LoginForm(request.form)

    return render_template('public/home.html', form=form)


@blueprint.route('/logout/')
@login_required
def logout():
    """Logout."""
    logout_user()
    flash('You are logged out.', 'info')
    return redirect(url_for('public.home'))


@blueprint.route('/register/', methods=['GET', 'POST'])
def register():
    """Register new user."""
    form = RegisterForm(request.form)
    if form.validate_on_submit():
        User.create(username=form.username.data, email=form.email.data, password=form.password.data, active=True)
        flash('Thank you for registering. You can now log in.', 'success')
        return redirect(url_for('public.home'))
    else:
        flash_errors(form)
    return render_template('public/register.html', form=form)


@blueprint.route('/gm/')
def gm():
    return render_template('public/gm.html')


@blueprint.route('/about/')
def about():
    """About page."""
    form = LoginForm(request.form)
    return render_template('public/about.html', form=form)
