# LDAP

## Authenticate User

##### Required Details

- Bind User ID
- Bind Password

To authenticate a user we need to get their distingused name in the directory. For this we need to search the user. To search a user in LDAP we use Bind Method. Usually we'll be provided with a service or technical account that have the privilge to search the users across the entire directory.

Once we bind, we need to search the user in the directory. For this we need some sort of Key which needs to be searched. In most cases it will be either Email ID or User Id.

If there is a match, the search result contains the user details. We can get the Distingused Name(dn) from the search result. Then we have to perform one more bind operation with the dn and the password the user entered.

The bind operation will throw an Invalid Credentials Error if there is a mismatch in the credentials.

## Example

For the below example, we'll be using an online LDAP Server. You can find more information regarding the online LDAP Server [here](https://www.zflexsoftware.com/index.php/pages/free-online-ldap)

```js
let ldap = require('ldapjs');

let client = ldap.createClient({
  url: 'ldap://www.zflexldap.com'
});

function AuthenticateUser(userID, password) {
  client.bind(
    'cn=ro_admin,ou=sysadmins,dc=zflexsoftware,dc=com',
    'zflexpass',
    function(err, res) {
      if (err) console.log(err);

      let opts = { filter: `uid=${userID}`, scope: 'sub', attributes: ['dn'] };

      client.search('dc=zflexsoftware,dc=com', opts, function(error, response) {
        if (error) console.log(error);
        response.on('searchEntry', function(entry) {
          let disName = entry.object.dn;
          client.bind(disName, password, function(err, res) {
            if (err) {
              client.unbind();

              return false;
            }
            client.unbind();
            console.log('Authentication Success');
            return true;
          });
        });
        response.on('error', function(err) {
          console.log('error: ' + err.message);
        });
        response.on('end', function(result) {
          console.log(result);
          client.unbind();
          setTimeout(() => {
            console.log('Authentication Failed');
            return false;
          }, 3000);
        });
      });
    }
  );
}

AuthenticateUser('guest3', 'guest3password');
```

## Code Break Down

### Require Library

We are using ldapjs which is a ldap driver similar to mongoose to connect to the LDAP server.

```js
let ldap = require('ldapjs');
```

### Create Client

We need to create a client which is connected to a URL. By default LDAP server will be running on port 389. If that's the case we don't need to specify the port. If it is running in anyother port we need to include a additional parameter port in createClient(). [Read about createClient() here.](http://ldapjs.org/client.html#create-a-client)

Here we are using the online LDAP Server **`www.zflexldap.com`**

```js
let client = ldap.createClient({
  url: 'ldap://www.zflexldap.com'
});
```

### Bind with Admin/Service/Technical User Credentials

Once we create the Client, to search the user in the directory we need to bind using the Admin/Service/Technical User Credentials. We need Bind Distingused Name and Bind Password.

Here Bind Distingused Name is **`cn=ro_admin,ou=sysadmins,dc=zflexsoftware,dc=com`** and Bind Password is **`zflexpass`**. [Read about Bind() here.](http://ldapjs.org/client.html#bind)

```js
client.bind(
  'cn=ro_admin,ou=sysadmins,dc=zflexsoftware,dc=com',
  'zflexpass',
  function(err, res) {
    if (err) console.log('Bind Failed');
    console.log('Bind Success');
  }
);
```

### Searching User

Once the binding is success we'll be searching the user using some filters. LDAP is a kind of nested function. You first need to bind the admin user and once the Binding is success only then you can search for the users. Otherwise it will throw empty results.

We'll use the **`search()`** function to get the required details. The first parameter is the base which tells the search() where to start searching from in the directory tree. The second parameter is the search options. We can specify filters, scope and attributes. Filter is used to search only particular field. Scope specifies where to search. Using `sub` will search the record at all depths. Finally attributes tells us what the search() should return.

Here we are using the userID as filter to search the user data. If there is an entry we'll get an event named `searchEntry`. We can get the search results in that. Once the search ends we'll get one more event `end`. So if there is no search results, then we won't be getting the `searchEntry` and the `end` will be triggered. [Read more about search() here](http://ldapjs.org/client.html#search)

```js
client.bind(
  'cn=ro_admin,ou=sysadmins,dc=zflexsoftware,dc=com',
  'zflexpass',
  function(err, res) {
    if (err) console.log(err);

    let opts = { filter: `uid=${userID}`, scope: 'sub', attributes: ['dn'] };

    client.search('dc=zflexsoftware,dc=com', opts, function(error, response) {
      if (error) console.log(error);
      response.on('searchEntry', function(entry) {
        console.log('entry: ' + entry);
      });
      response.on('error', function(err) {
        console.log('error: ' + err);
      });
      response.on('end', function(result) {
        console.log('result: ' + result);
      });
    });
  }
);
```

### Authenticating the User

Once we got the Distingused Name(dn) of the user, we use the `bind()` again to check for validity. We'll pass the dn and password to the bind(). If it throws an error then it means that the credentials do not match. Otherwise the user entered the correct details. Bind function just says whether the passed parameters are valid or not.

```js
client.bind(
  'cn=ro_admin,ou=sysadmins,dc=zflexsoftware,dc=com',
  'zflexpass',
  function(err, res) {
    if (err) console.log(err);

    let opts = { filter: `uid=${userID}`, scope: 'sub', attributes: ['dn'] };

    client.search('dc=zflexsoftware,dc=com', opts, function(error, response) {
      if (error) console.log(error);
      response.on('searchEntry', function(entry) {
        let disName = entry.object.dn;
        client.bind(disName, password, function(err, res) {
          if (err) {
            client.unbind();

            return false;
          }
          client.unbind();
          console.log('Authentication Success');
          return true;
        });
      });
      response.on('error', function(err) {
        console.log('error: ' + err.message);
      });
      response.on('end', function(result) {
        console.log(result);
        client.unbind();
        setTimeout(() => {
          console.log('Authentication Failed');
          return false;
        }, 3000);
      });
    });
  }
);
```

::: tip
[LDAP Guide for Beginners](http://ldapjs.org/guide.html)
[LDAP User Authentication Explained](https://connect2id.com/products/ldapauth/auth-explained)
:::
