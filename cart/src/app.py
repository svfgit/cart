
import cherrypy
import os.path

current_dir = os.path.dirname(os.path.abspath(__file__))


class Root(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"
if __name__ == '__main__':
    cherrypy.config.update({
                         'server.socket_host': '0.0.0.0',
                         'server.socket_port': 80,
                        })
    cherrypy.quickstart(Root(), '/',
                        config={
             '/': {
                 'tools.staticdir.on' : True,
                 'tools.staticdir.dir' : os.path.join(current_dir, '../webroot'),
                 'tools.staticdir.index' : 'index.html',
             }, 
                       
         })
