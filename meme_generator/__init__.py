"""Meme generator package initializer."""
import flask
# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)
# Read settings from config module (meme_generator/config.py)
app.config.from_object('meme_generator.config')

import meme_generator.views
import meme_generator.api
