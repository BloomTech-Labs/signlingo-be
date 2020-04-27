[![Maintainability](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/test_coverage)

# API Documentation

#### Backend delpoyed at [🚫name service here](🚫add URL here) <br>

### Backend framework goes here

-    Express and Knex: These frameworks compliment each other well and make the management of the database schema simple.
-    jwt: While this framework is not the most secure of method for it will serve as a fallback in case the Okta server is down. Additionally a plan is in the works to try and secure users information from being compromised should the backend data be breached.
-    Okta: Okta is a third party identity provider that uses openId and Oauth 2.0. It also supports external identity providers such as Facebook and Google and allows authentication with these services without the need to use additional frameworks or write extensive code. The backend simply provides and endpoint that returns a URL that will redirect the User to the afore mentioned services. All of the heavy work is processed through Okta.


#### Organization Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `` | all users      | Returns the information for an organization. |
| PUT    | `` | owners         | Modify an existing organization.             |
| DELETE | `` | owners         | Delete an organization.                      |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/auth/facebook`        | none           | Returns the redirect URL to login in using facebook               |
| GET    | `/api/auth/google`    | none | Returns the redirect URL to login using google             |
| POST    | `/api/auth/register`        | none | Creates a new user account using jwt                    |
| POST   | `/api/auth/login` | none                | Verifies user identity an logs user in. |
|                                                    |

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## Environment Variables

DB_ENV = development

JWT_SECRET
    
PORT = 3300 //Local port can be set to anything

SALT_ROUNDS 
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.

