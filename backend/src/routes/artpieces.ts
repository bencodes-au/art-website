import { Router } from "express";
import prisma from "../prismaClient";

export const artpiecesRouter = Router();

// GET /artpieces - fetch all
artpiecesRouter.get("/", async (req, res) => {
  try {
    const artPieces = await prisma.artPiece.findMany();
    res.json(artPieces);
  } catch (error) {
    console.error("[GET /artpieces] Error:", error);
    res.status(500).json({ error: "Failed to fetch art pieces" });
  }
});

// GET /artpieces/:id - fetch single
artpiecesRouter.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const artPiece = await prisma.artPiece.findUnique({ where: { id } });

    if (!artPiece) {
      return res.status(404).json({ error: "Art piece not found" });
    }

    res.json(artPiece);
  } catch (error) {
    console.error("[GET /artpieces/:id] Error:", error);
    res.status(500).json({ error: "Failed to fetch art piece" });
  }
});

// POST /artpieces - create new
artpiecesRouter.post("/", async (req, res) => {
  try {
    const {
      name,
      images,
      description,
      materials,
      size,
      display,
      availability,
      price,
    } = req.body;

    const newArtPiece = await prisma.artPiece.create({
      data: {
        name,
        images,
        description,
        materials,
        size,
        display,
        availability,
        price,
      },
    });

    res.status(201).json(newArtPiece);
  } catch (error) {
    console.error("[POST /artpieces] Error:", error);
    res.status(500).json({ error: "Failed to create art piece" });
  }
});

// PUT /artpieces/:id - update
artpiecesRouter.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const updated = await prisma.artPiece.update({
      where: { id },
      data: req.body,
    });

    res.json(updated);
  } catch (error) {
    console.error("[PUT /artpieces/:id] Error:", error);
    res.status(500).json({ error: "Failed to update art piece" });
  }
});

// DELETE /artpieces/:id
artpiecesRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.artPiece.delete({ where: { id } });

    res.json({ message: "Art piece deleted" });
  } catch (error) {
    console.error("[DELETE /artpieces/:id] Error:", error);
    res.status(500).json({ error: "Failed to delete art piece" });
  }
});
