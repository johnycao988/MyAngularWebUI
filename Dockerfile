## build csanuglar image
FROM node
USER node
#RUN mkdir -p /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/.node-gyp/9.5.0 \
#    chmod 777 /usr/local/lib/node_modules/@angular/cli/node_modules/node-sass/.node-gyp/9.5.0
RUN sudo npm install -g typescript   \
    sudo npm install -g typings \
    sudo npm install -g @angular/cli



#WORKDIR /workspace

#CMD ng serve -H 0.0.0.0 --port=4200