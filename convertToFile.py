import os
import base64
import sys


with open('textForPython6.txt') as f:
    first_line = f.readline()
filename = sys.argv[1] + ".wav"
message_bytes = base64.b64decode(first_line)
wav_file = open(filename, "wb")
wav_file.write(message_bytes)