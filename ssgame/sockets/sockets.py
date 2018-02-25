# -*- coding: utf-8 -*-
"""Socket connections"""
from flask import jsonify
from ssgame.extensions import socketio
from ssgame.utils import authenticated_only
from flask_socketio import send, emit, join_room, leave_room
import datetime as dt
import json as js


@socketio.on('answer')
def handle_message(json):
    print('received message: ' + str(json))
    emit('answer', json, broadcast=True)


@socketio.on('my-event')
def default(json):
    print('received message: ' + str(json))
