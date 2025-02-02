import { Router } from "express";
import * as service from "../service/index";

export const userRouter = () => {
  const router = Router();

  // Static routes
  router.get("/", async (req, res) => {
    const users = await service.GetUsers();
    if (users) {
      return res.json({ users });
    } else {
      return res.status(404).json({ message: "No users found" });
    }
  });

  // Dynamic routes
  router
    .route("/:id")
    .get(async (req, res) => {
      const user = await service.GetUsersById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ user });
    })
    .post(async (req, res) => {
      const user = await service.CreateUser(req.body);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ user });
    })
    .put(async (req, res) => {
      const user = await service.UpdateUsers(req.params.id, req.body);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ user });
    })
    .delete(async (req, res) => {
      const user = await service.DeleteUsers(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json({ user });
    });

  // Middleware for dynamic routes
  router.param("id", (req, res, next, id) => {
    next();
  });

  return router;
};
