---
trigger: model_decision
glob:
description: "Triggers when a brainstorming session begins in landingpage-andin. Uses the brainstorming skill to define goals, then generates a PRD using the breakdown-feature-prd skill once outcomes are determined."
---

# Brainstorming and PRD Workflow Rule

This rule enforces a structured workflow for any brainstorming session initiated within the **landingpage-andin** workspace. 

## 1. Trigger Conditions
This rule triggers when:
- A brainstorming session is initiated on any topic.
- A user asks to brainstorm, plan, design, create, or modify features, components, or user flows.

## 2. Phase 1: Brainstorming & Goal Definition
When this rule is triggered, you MUST utilize the `/brainstorming` skill.
1. Load the brainstorming skill instructions by reading [brainstorming SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/brainstorming/SKILL.md).
2. Follow its guidelines to define the goals, explore project context, and outline features.
3. Collaborate with the user, asking clarifying questions one at a time to build a cohesive design.
4. Document the design spec in the designated file path: `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`.

## 3. Phase 2: Feature PRD Generation
Once the brainstorming outcomes are determined, approved, and finalized, you MUST transition to creating a Product Requirements Document (PRD).
1. Load the feature PRD breakdown instructions by reading [breakdown-feature-prd SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/breakdown-feature-prd/SKILL.md).
2. Create a detailed PRD based on the brainstorming outcomes.
3. Save the generated PRD to the project path: `docs/ways-of-work/plan/{epic-name}/{feature-name}/prd.md`.
