# Cart

## Setup

### Install Docker 

`needs instructions`

***

### Google Cloud

#### Setup Google Cloud SDK

`needs instructions`

***

#### Pull Docker image from gCloud docker registry

`needs instructions`

***

### Docker file setup

#### Clone vanilla Ubuntu container `is this necessary?`

`docker run -i -t ubuntu /bin/bash`

***

### Run Docker file containing...
- apt-get upgrade
- apt-get update
- vim
- python
- pip
- postgresql
	- apt-get install postgresql
	- phsychopath2
- dataset
	- vim /etc/postgresql/9.5/main/pg_hba.conf
		- change peer to trust
	- /etc/init.d/postgresql start
	- /etc/init.d/postgresql reload
		- createdb cartdb -U postgres
		- createuser --interactive
			- name ~ neo
			- password ~ something complex

- CherryPy
***

##### TODO
- node
	- `apt-get install nodejs`
- npm
	- `apt-get install npm`

- Angular 2.0
- gulp?
- SASS?
- WedPack?
- oAuth 2.0
- Stripe
- Bar Code(s)

## User Personas

### Customer(s)
###### @TODO ~ Combine customer family & extended family
https://app.xtensio.com/folio/hf5nxhvt
https://app.xtensio.com/folio/e5n9sbct

### Merchant(s)
https://app.xtensio.com/folio/2hx6gsif

