[Click here](https://zealthy-help-desk-jason-leajones-projects.vercel.app) to demo the application

### Technology

- Typescript
- React
- Nextjs
- TaildwindCSS
- ShadcnUI
- Postgres
- Prisma
- Vercel

### Local Development

Create .env file and add PostgresDB vars

```
DATABASE_URL=
DIRECT_URL=
```

##### Running application locally

Requires Node v20.11.0

```
npm install
npm run dev
```

##### Updating Prisma Schema

```
npx prisma db generate
npx prisma db push
```

##### Creating Prisma Migration

```
npx prisma migrate dev --name <migration_name>
```

### Deploy w/ Github + Vercel

- Pushes to main branch will deploy to production
- If DB changes are required, ensure you create and commit a prisma migration file.
- Custom Vercel Build Command will update the prod DB

### Requirements

- [x] Install ShadcnUI
- [x] New Task Page
- [x] Admin Page (/dashboard)
- [x] Task Form (Fields: Name, Email, Description)
- [x] Setup DB / Install Prisma
- [x] Create Prisma Task model
- [x] Create Task Status Enum (New, In Progress, Resolved)
- [x] Task List Table
- [x] Faceted Filter by status
- [x] Text Filter by description
- [x] Task Detail Page (/task/{taskId})
- [x] Common Header
- [x] Create Prisma Comment model / Modify Task Model
- [x] Update Task Status
- [x] Reply/Comment on Task
- [x] Email Logging Placements (Server Side)
- [ ] Error Pages

### Out Of Scope/Next Steps

- [ ] Observability
- [ ] Logging
- [ ] Admin Auth
- [ ] Assignment
- [ ] View Created Tickets/Check Status
- [ ] Email Notifications
- [ ] AI Model to validate ticket
- [ ] Robust filtering/searching
- [ ] Table Pagination
- [ ] Task Audit/Logging
