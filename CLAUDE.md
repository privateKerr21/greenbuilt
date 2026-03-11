# greenbuilt-website

**Location**: `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website`

## Session Startup Checklist
At the start of every new session, Claude MUST read these files in order:
1. `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website\context.md` — what was last worked on and current state
2. `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website\plan.md` — overall project goals, architecture, and phases
3. `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website\tasks.md` — current task list with statuses
4. `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website\lessons.md` — patterns and mistakes to avoid

This gives Claude full context to pick up exactly where we left off without needing reminders.

## File Purposes

### context.md
Tracks the **current state** of the project — what was last completed, what is in progress, any blockers, and key decisions made. Update this at the end of every work session with a brief summary of what changed. Think of it as a "handoff note" from one session to the next.

### plan.md
The **project roadmap** — high-level goals, tech stack, architecture decisions, phases, and milestones. This rarely changes unless the project direction shifts. Update it when a major architectural decision is made or a phase is completed.

### tasks.md
The **active task list** — broken into `[ ]` pending, `[~]` in-progress, and `[x]` completed items. Update this continuously during work. New tasks discovered during implementation go here immediately.

## Self-Improvement Loop
- After ANY correction from the user: update `lessons.md` with the pattern
- Write rules that prevent the same mistake from recurring
- Review `lessons.md` at session start for relevant context

## Working Rules
- Always use full paths prefixed with `C:\Users\kerrk\OneDrive\Documents\Bridge AI Solutions\Clients\Green Built\greenbuilt-website\` when creating or editing files
- Update `context.md` at the end of each session before closing
- Mark tasks in `tasks.md` as you go — don't wait until the end
- If a major decision is made, add it to `plan.md` under a "Decisions" section
