import cherrypy
import os.path

current_dir = os.path.dirname(os.path.abspath(__file__))

class Root(object):
    
    def page(self, body="", bg=False):
        back="""
	<style type="text/css">
		body {
		 background-image: url(img/fruit.png) !important;
		 background-repeat: no-repeat !important;
		 background-size: cover;
		 height: 100%;
		 width: 100%;
		}
	</style>
	"""
        return """

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Cart</title>
    <link rel="icon" type="image/x-icon" href="img/cart-icon.png">
    <link rel="stylesheet" media="all" href="css/normalize.css">
    <link rel="stylesheet" media="all" href="css/main.css">
    """ + back + """
</head>
<body>
"""+body+"""
<Br><Br><Br><Br><Br><Br><Br>
</body></html>
    """
    
    def filler(self, next, img):
        return """
<a href='"""+next+"""'>
<img src="img/"""+img+""".png" width="100%" />
</a>
    """
    
    def button(self, color="grn", text="", url=""):
        return "<table cellpadding=0 cellspacing=0 align=center width=308 height=53 background='img/btn_" + color + ".png'><tr><td align=center  style='width:100%;height:100%;'><a href='"+url+"' style='width:100%;height:100%;'><div>"+text+"</div></a></td></tr></table>"
    
    def table(self, content=""):
        return "<table>" + content + "</table>"
    
    def input(self, placeholder=""):
        return "<input placeholder='"+placeholder+"'/>"
    
    @cherrypy.expose
    def index(self):
        return "Hello World!"
    
    @cherrypy.expose
    def landing(self): 
        #return self.page(body=self.filler("register", "landing"))
        return self.page(body="""
        <p align=center>
            <img src="img/icon.png" />"""+
            self.button(text="Login", url="login") +
            "<br>" + 
            self.button(text="Register", url="register") +
            """            
        </p>
        """, bg=True)
    
    @cherrypy.expose
    def register(self): 
        #return self.page(body=self.filler("login", "register"))
        return self.page(body="""
        <p align=center>
            <img src="img/icon.png" />"""+
            self.table(content="""
            <tr><td align=center>"""+self.input(placeholder="First Name")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Last Name")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Address")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="City")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="State")+"""</td></tr>
            """) +
            "<br><Br>"+
            self.button(text="Next", url="login") +
            """            
        </p>
        """, bg=True)
    
    @cherrypy.expose
    def login(self): 
        #return self.page(body=self.filler("sel_store", "login"))
        return self.page(body="""
        <p align=center>
            <img src="img/icon.png" />"""+
            self.table(content="""
            <tr><td align=center>"""+self.input(placeholder="Login")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Password")+"""</td></tr>
            """) +
            "<br><Br>"+
            self.button(text="Login", url="sel_store") +
            """            
        </p>
        """, bg=True)
    
    @cherrypy.expose
    def sel_store(self): 
        #return self.page(body=self.filler("sel1", "sel_store"))
        return self.page(body= self.actionBar(title='Choose Store') + """ 
    	<p align=center>
		<font size=+3>Select Your Store</font><br>
		<br>
		<a href="sel1"><img src="img/store1.png" width=100% /></a>
		<br><br>
		<a href="sel1"><img src="img/store2.png" width=100% /></a>
    	</p>
        """);
    
    @cherrypy.expose
    def sel1(self): 
        #return self.page(body=self.filler("estimate", "sel1"))
        return self.page(body= self.actionBar(title='Select Driver') + """ 
        <p align=center>
            <font size=+3>Select Your Driver</font><br>
            <br>
            <a href="estimate"><img src="img/driver1.png" width=100% /></a>
            <br><br>
            <a href="estimate"><img src="img/driver2.png" width=100% /></a>
        </p>
    """);
    
    @cherrypy.expose
    def estimate(self): 
        #return self.page(body=self.filler("paymethod", "estimate"))

        return self.page(body= """
        <img src="img/store1.png" width=100% /><br><br>
        <img src="img/step2.png" width=100% /><br>
        <p align=center>
            
            <br>
            <font size=+3>Estimated Price</font><br>
            <br>
            <font size=+5>$5.23</font><br>
            <br>
        """+ self.button(text="Request Ride", url="paymethod") +"""
            </p>
        """);
    
    @cherrypy.expose
    def paymethod(self): 
        #return self.page(body=self.filler("confirm", "paymethod"))
        return self.page(body= self.actionBar(title='Card Info') + """ 
        <table align=center>            
         <tbody>            
            """+
            self.table(content="""
            <tr><td align=center>"""+self.input(placeholder="Name")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Card Number")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Expiration Date")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="CVC")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="State")+"""</td></tr>
            """) +"""
        """+ self.button(text="Pay For Ride", url="confirm") +"""
            </p>
        """);
    
    @cherrypy.expose
    def confirm(self): 
        return self.page(body=self.filler("landing", "confirm")) 

    # Set coupon page
    # Need destination
    @cherrypy.expose
    def coupon(self): 
        # return self.page(body=self.filler("header", "coupon")) 
	return self.actionBar(title="Coupon")

    @cherrypy.expose
    def actionBar(self, title=""): 
        return self.page(body="""
        <div class="action-bar">
	    <div class="pull-left">
	    	<img class="action-bar-img" src="img/cart-icon.png" />
	    </div>
	    <span>
		""" + title + """    
	    </span>
	    <div class="pull-right" style="visibility: hidden;">
	    	<img class="action-bar-img" src="img/hamburger-icon.png" />
	    </div>
    	</div>""")

    @cherrypy.expose
    def register(self): 
        #return self.page(body=self.filler("login", "register"))
        return self.page(body="""
        <p align=center>
            <img src="img/icon.png" />"""+
            self.table(content="""
            <tr><td align=center>"""+self.input(placeholder="First Name")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Last Name")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Address")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="City")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="State")+"""</td></tr>
            """) +
            "<br><Br>"+
            self.button(text="Next", url="login") +
            """            
        </p>
        """, bg=True)
    
    @cherrypy.expose
    def login(self): 
        return self.page(body= self.actionBar(title='Login') + """ 
        <p align=center>
         """ +
            self.table(content="""
            <tr><td align=center>"""+self.input(placeholder="Login")+"""</td></tr>
            <tr><td align=center>"""+self.input(placeholder="Password")+"""</td></tr>
            """) +
            "<br><Br>"+
            self.button(text="Login", url="sel_store") +
            """            
        </p>
        """, bg=True)
    
    @cherrypy.expose
    def sel_store(self): 
        return self.page(body= self.actionBar(title='"Select Store"') + """ 
    	<p align=center>
		<font size=+3>Select Your Store</font><br>
		<br>
		<a href="sel1"><img src="img/store1.png" width=100% /></a>
		<br><br>
		<a href="sel1"><img src="img/store2.png" width=100% /></a>
	</p>
        """);
    
    @cherrypy.expose
    def sel1(self): 
        #return self.page(body=self.filler("estimate", "sel1"))
        return self.page(body= self.actionBar(title='Estimate') + """ 
        <p align=center>
            <font size=+3>Select Your Driver</font><br>
            <br>
            <a href="estimate"><img src="img/driver1.png" width=100% /></a>
            <br><br>
            <a href="estimate"><img src="img/driver2.png" width=100% /></a>
        </p>
    """);




"""
# Waiting for coupon image to set to background image as second parameter
    @cherrypy.expose
    def coupon(self): 
        return self.page(body=self.filler("landing", "coupon")) 
"""

    

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
