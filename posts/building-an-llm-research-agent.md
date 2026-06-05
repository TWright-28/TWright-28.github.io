---
title: "Building an Autonomous LLM Research Agent"
date: "2026-05-20"
description: "What I learned designing a three-layer agent architecture for automated bug research — and why putting correctness in the tool layer matters."
---

Last year I needed to classify 69,000 GitHub issues. Doing it by hand wasn't an option, so I built an agent to do it for me. Here's what I learned.

## The problem with naive LLM pipelines

The obvious approach — prompt an LLM with each issue and ask it to classify — breaks down quickly. The model is doing too many things at once: parsing the issue, reasoning about the classification, formatting output, handling edge cases. When something goes wrong (and it will), you can't tell which step failed.

## A three-layer architecture

The design I landed on separates concerns cleanly:

- **Agent layer** — the orchestrating model. It decides *what* to do and *in what order*. It's intentionally dumb about the details.
- **Tool layer** — typed interfaces that enforce correctness. The agent calls tools; tools validate inputs and outputs. Bugs here are easy to find and fix.
- **Helper layer** — pure functions. Database reads, API calls, data transformations. No LLM involved.

The key insight: **correctness lives in the tool and helper layers**. The agent just coordinates. This means you can swap the underlying model (I tested with both a local 20B model and Gemini 2.5 Flash) without touching the logic that actually matters.

## Why this worked

When I ran validation across a 10-scenario test suite, the agent's tool selection and ordering was consistent across models. The accuracy came from the tools, not the model's reasoning about classification.

This also made iteration fast. Improving classification accuracy meant improving a helper function, not re-engineering a prompt.

## What I'd do differently

The hardest part wasn't the agent — it was the data pipeline. Time-aware transitive dependency resolution (figuring out what versions of what packages existed *at the time an issue was filed*) took longer than everything else combined. Build that first.

---

The full system is part of my MSc thesis. I'll write more about the dataset and empirical study in a future post.
