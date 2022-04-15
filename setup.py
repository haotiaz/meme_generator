"""
Meme Generator python package configuration.
"""

from setuptools import setup

setup(
    name='meme_generator',
    version='0.1.0',
    packages=['meme_generator'],
    include_package_data=True,
    install_requires=[
        'Flask',
        'requests',
    ],
    python_requires='>=3.6',
)
