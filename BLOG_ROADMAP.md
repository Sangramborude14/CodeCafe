# 🚀 CodeCafe Blog Application Roadmap

This document outlines the steps needed to transform your current setup into a fully functional blog platform.

---

## **Phase 1: Basic Authentication & Session Management**
Objective: Allow users to sign up, log in, and log out securely.

- [x] **Sign Up**:
    - [x] Backend: `POST /signup` with password hashing (`bcryptjs`).
    - [x] Frontend: `signup.jsx` with full state handling.
- [ ] **Log In**:
    - [ ] Backend: Update `authController.js` to compare passwords and create a session.
    - [ ] Frontend: Complete `Login.jsx` (add submit button and correct fetch URL).
- [ ] **Log Out**:
    - [ ] Backend: Add `POST /logout` to destroy the session.
    - [ ] Frontend: Add a Logout button to the `NavBar.jsx`.
- [ ] **Protected Routes**:
    - [ ] Ensure only logged-in users can reach the `/CreateBlogs` page.

---

## **Phase 2: Core Blog Features (CRUD)**
Objective: Move beyond just listing blogs to full control.

- [ ] **View Single Blog**:
    - [ ] Create a `BlogDetails.jsx` component.
    - [ ] Backend: `GET /blogs/:id` to fetch one specific post.
- [ ] **Edit & Update**:
    - [ ] Create `editBlog.jsx` with a form pre-filled with existing data.
    - [ ] Backend: `PATCH /blogs/:id` to save modifications.
- [ ] **Delete Blogs**:
    - [ ] Add a "Delete" button to the `AllBlogs.jsx` cards.
    - [ ] Backend: `DELETE /blogs/:id` logic.

---

## **Phase 3: User Experience & Design**
Objective: Use TailwindCSS to make the app look and feel premium.

- [ ] **Master Layout**:
    - [ ] Improve `NavBar.jsx` with sticky positioning and hover effects.
    - [ ] Add a "Home" page with a hero section ("Welcome to CodeCafe").
- [ ] **Dynamic UI**:
    - [ ] Add "Loading" states and "Success/Error" alerts for every action.
    - [ ] Use Tailwind Grid/Flexbox for blog lists.
- [ ] **Personalization**:
    - [ ] Add a "My Blogs" page that only shows the posts of the logged-in user.

---

## **Phase 4: Launch & Deployment**
Objective: Prepare the app for real-world usage.

- [ ] **Security**: 
    - [ ] Move the MongoDB URL and Session Secret to a `.env` file.
- [ ] **Testing**:
    - [ ] Verify that a user cannot delete another person's blog.
- [ ] **Build**:
    - [ ] Run `npm run build` to generate the production bundle.

---

### **Current Focus**
Currently working on: **Phase 1 - Login Flow**.
Next Task: Add logic to `authController.loginPost` and complete `Login.jsx` form.

# 📝 Implementation Plan: Personal Blogs (MyBlogs)

This guide outlines the steps to implement a personal blog management dashboard where users can view, edit, and delete their own posts.

## 1. Backend: API Enhancements
We need to add three new endpoints to [blogRouter.js](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/backend/routes/blogRouter.js:0:0-0:0) and [blogController.js](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/backend/controller/blogController.js:0:0-0:0).

### A. Fetch Personal Blogs (`GET /api/blog/myBlogs`)
- **Controller**: Find all blogs in MongoDB where the `username` matches `req.session.user.username`.
- **Logic**: Ensure only logged-in users can access this.

### B. Delete Blog (`DELETE /api/blog/blogs/:id`)
- **Controller**: Find the blog by ID. 
- **Security Check**: Check if the blog's `username` matches the current session user before deleting.

### C. Update Blog (`PUT /api/blog/blogs/:id`)
- **Controller**: Find the blog by ID and update the `Title` and `blogContent`.
- **Security Check**: Only allow the owner to update.

---

## 2. Frontend: [myBlog.jsx](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/frontend/src/components/myBlog.jsx:0:0-0:0) Component
Transform [myBlog.jsx](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/frontend/src/components/myBlog.jsx:0:0-0:0) into a dashboard for personal posts.

- **State**: Create a `blogs` state.
- **Effect**: Fetch personal blogs on mount.
- **UI Structure**:
  - Map over `blogs`.
  - For each blog, display:
    - Title and Content.
    - 🗑️ **Delete Button**: Triggers `handleDelete(blogId)`.
    - ✏️ **Edit Button**: Redirects to `/edit-blog/:id` or opens a form.

---

## 3. Frontend: Logic & Routing
- **`handleDelete`**: 
  - Call the `DELETE` API.
  - On success, filter the local `blogs` state to remove the deleted item so the UI updates instantly.
- **[App.jsx](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/frontend/src/services/App.jsx:0:0-0:0)**:
  - Add a route for `/EditBlog/:id` so your edit component knows which blog to load.

---

## 4. Next Steps
1. **Fix [logout.jsx](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/frontend/src/components/logout.jsx:0:0-0:0) syntax** (Critical for app stability).
2. **Implement Backend Delete/Update controllers**.
3. **Build out the [myBlog.jsx](cci:7://file:///c:/Users/Sangram%20Borude/Documents/coding/to-do/frontend/src/components/myBlog.jsx:0:0-0:0) fetch and display logic**.

