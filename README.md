<p align="center">
<img width="150" src="./public/decile_logo.png"/>
<h1 align="center"><b>Decile</b></h1>
<p align="center">
Simple, open-source analytics tool for any Postgres database.
<br />
<a href="https://decile.app" align="center"><strong>Early access</strong></a>
<br />
</p>
<p >
Connect any postgres database. Query using our online SQL editor or query builder. Save and share queries with your team. Export to Google Sheets. Schedule queries and automatically update your Google Sheet.
<br />

</p>

<br />
  <img src="./public/screenshot.png" style="border-radius: 10px;" />

<p align="center">
  <br />
  <a href="https://decile.app">
    <img src="https://img.shields.io/badge/We're%20open%20for%20beta!-Join-%2322c55e" />
  </a> 
  <br />
</p>

This repo contains the open-source code to host your own version of Decile. Join the waitlist for our [hosted version](https://decile.app).

Contributions welcome!

**Have suggestions for what to work on next? We'd love to hear from you. Sign up for [early access](https://decile.app)!**

---

## License

We use the GNU GPL V3 license. See LICENSE for more details.

---

## Features

### Supported

- [x] Authentication UIs including sign in and sign up
- [x] Google sign in
- [x] Invite your team to share queries
- [x] Admin and user roles
- [x] Add any Postgres database
- [x] Online SQL Edior
- [x] Query without SQL
- [x] Export to Google Sheets
- [x] Schedule queries by hour, day, week or month

### In-progress

- [ ] Email notifications

### Backlog

- [ ] Charts and graphs
- [ ] Dashboards
- [ ] Database access management

## Getting Started

**1. Clone this repository**

```bash
git clone https://github.com/decileapp/decile
cd decile
```

**2. Configure your environment variables.**

Change "env.example" to "env.local".

Get your API keys for each service and complete the file:

- Supabase: database
- Mixpanel: analytics
- Courier: emails + the id for your template
- Email: Enter an email address you want to invite users from.
- Google: Google auth + sheets integration
- Bearer token: token for calling your schedule endpoint

For emailing, please set up an account with Courier and get an API key.

For scheduling, you need to set up a cron job to call https://your-domain.com/api/internal/schedule with the Bearer token above.

**3. Install modules.**

Run "npm install" in your terminal to install all your modules.

**4. Run it locally**

Run "npm run" to start your local version at http://localhost:3000

**5. Deploy to your favorite server!**

**Important!** Remember to add your dashboard URL to your list of your sign-up redirect URLs in Supabase. You can find it at https://app.supabase.io/project/YOUR_PROJECT_ID/auth/settings.
