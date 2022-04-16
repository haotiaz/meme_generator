# Meme Generator

Meme Generator generates memes using the images from Flickr. A user is allowed to search for images on Flickr matching the query, and select one image to create a meme. The user can change the font size, color and vertical position of the text on the image. 


## Building Meme Generator

### Prerequisite

- Python 3.6+
- Node 8+
- npm 7+

```script
python --version
mvn --version
node --version
```

### Virtual environment

To create a Python virtual environment, which installs the Python tools and packages locally and won’t affect Python tools and packages installed elsewhere on your computer, use the following command:


```bash
python3 -m venv env
```

To activate a vitual machine, use the following command (do this every time you start a new shell):

```bash
source env/bin/activate
```

### Install

Install the app into the virtual environment: 

```bash
pip install -e .
```

Install required dependencies:

```bash
npm ci .
```

### Run

Execute the shell script to run the flask server:

```bash
chmod +x ./bin/run
./bin/run
```

Open the app at http://localhost:8000.

<br/>