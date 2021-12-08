FROM gitpod/workspace-full-vnc
RUN apt-get update \
    # electron
    && sudo apt-get install -y libgtk-3-0 libnss3 libasound2 libgbm1 libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev