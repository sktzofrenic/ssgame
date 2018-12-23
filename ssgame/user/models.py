# -*- coding: utf-8 -*-
"""User models."""
import datetime as dt

from flask_login import UserMixin

from ssgame.database import Column, Model, SurrogatePK, db, reference_col, relationship
from ssgame.extensions import bcrypt


class EnglishAbbreviationsKey(SurrogatePK, Model):
    """Verse of the Bible"""

    __tablename__ = 'key_abbreviations_english'
    a = Column(db.Text, unique=True, nullable=False)  # Abbreviation
    b = Column(db.ForeignKey('{0}.{1}'.format('t_kjv', 'b')), nullable=False)  # Book
    p = Column(db.Integer, unique=True, nullable=False)  # Primary Abbreviation?
    bible_verse = relationship('BibleVerse', backref='abbreviations')

    def __init__(self, **kwargs):
        """Create instance."""
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<EnglishKey({name})>'.format(name=self.id)


class EnglishKey(Model):
    """Verse of the Bible"""

    __tablename__ = 'key_english'
    b = Column(db.Integer, unique=True, nullable=False, primary_key=True)  # Book ID
    n = Column(db.Text, unique=True, nullable=False)  # Name
    t = Column(db.Text, unique=True, nullable=False)  # Testament
    g = Column(db.ForeignKey('{0}.{1}'.format('key_genre_english', 'g')), nullable=False)   # Genre
    genre = relationship('GenreKey', backref='english_keys')

    def __init__(self, **kwargs):
        """Create instance."""
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<EnglishKey({name})>'.format(name=self.a)


class GenreKey(Model):
    """Verse of the Bible"""

    __tablename__ = 'key_genre_english'
    g = Column(db.Integer, unique=True, nullable=False, primary_key=True) 
    n = Column(db.Text, unique=True, nullable=False)  # Name of Genre

    def __init__(self, **kwargs):
        """Create instance."""
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<GenreKey({name})>'.format(name=self.a)



class BibleVerse(SurrogatePK, Model):
    """Verse of the Bible"""

    __tablename__ = 't_kjv'
    b = Column(db.ForeignKey('{0}.{1}'.format('key_english', 'b')), nullable=False)  # Book  # Book
    c = Column(db.Integer, unique=True, nullable=False)  # Chapter
    v = Column(db.Integer, unique=True, nullable=False)  # Verse
    t = Column(db.Text, unique=True, nullable=False)     # Text
    book_testament_genre = relationship('EnglishKey', backref='bible_verses')

    @property
    def serialized(self):
        return {
            'book': self.b,
            'chapter': self.c,
            'verse': self.v,
            'text': self.t,
            'book_testament_genre': {
                'book': self.book_testament_genre.n,
                'testament': self.book_testament_genre.t,
                'genre': self.book_testament_genre.genre.n
            }
        }

    def __init__(self, **kwargs):
        """Create instance."""
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<BibleVerse({name})>'.format(name=self.id)


class Role(SurrogatePK, Model):
    """A role for a user."""

    __tablename__ = 'roles'
    name = Column(db.String(80), unique=True, nullable=False)
    user_id = reference_col('users', nullable=True)
    user = relationship('User', backref='roles')

    def __init__(self, name, **kwargs):
        """Create instance."""
        db.Model.__init__(self, name=name, **kwargs)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<Role({name})>'.format(name=self.name)


class User(UserMixin, SurrogatePK, Model):
    """A user of the app."""

    __tablename__ = 'users'
    username = Column(db.String(80), unique=True, nullable=False)
    email = Column(db.String(80), unique=True, nullable=False)
    #: The hashed password
    password = Column(db.Binary(128), nullable=True)
    created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    first_name = Column(db.String(30), nullable=True)
    last_name = Column(db.String(30), nullable=True)
    active = Column(db.Boolean(), default=False)
    is_admin = Column(db.Boolean(), default=False)

    def __init__(self, username, email, password=None, **kwargs):
        """Create instance."""
        db.Model.__init__(self, username=username, email=email, **kwargs)
        if password:
            self.set_password(password)
        else:
            self.password = None

    def set_password(self, password):
        """Set password."""
        self.password = bcrypt.generate_password_hash(password)

    def check_password(self, value):
        """Check password."""
        return bcrypt.check_password_hash(self.password, value)

    @property
    def full_name(self):
        """Full user name."""
        return '{0} {1}'.format(self.first_name, self.last_name)

    def __repr__(self):
        """Represent instance as a unique string."""
        return '<User({username!r})>'.format(username=self.username)
