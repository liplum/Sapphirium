import shutil
import os
import zipfile
from os.path import join, isdir, isfile, relpath
import glob


def removeFileOrFolder(path):
    if isfile(path):
        os.remove(path)
    elif isdir(path):
        shutil.rmtree(path)


def copyFileOrFolder(src, dst):
    if isfile(src):
        shutil.copy(src, dst)
    elif isdir(dst):
        shutil.copytree(src, dst, dirs_exist_ok=True)


def zipFilesInDir(path, ziph: zipfile.ZipFile):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            nameInZip = relpath(join(root, file), join(path, '..'))
            nameInZip = nameInZip.removeprefix(f"{path}{os.sep}")
            ziph.write(join(root, file), nameInZip, compress_type=zipfile.ZIP_DEFLATED)
