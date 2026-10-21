# PRD: Next.js Security Dependency Upgrade

## 1. Executive Summary

**Problem Statement**: The landing page locks `next` to `16.2.10`, a version included in known high and critical security advisory ranges from the Codex Security scan. The dependency is used by the production build and standalone server artifact.

**Proposed Solution**: Upgrade the direct `next` dependency to the approved stable target `16.3.8`, regenerate `package-lock.json`, and validate the resulting dependency graph and production build. Preserve all existing UI, content, routes, and application behavior.

**Success Criteria**:

- `package.json` declares `next` at `16.3.8`.
- `package-lock.json` resolves `node_modules/next` to `16.3.8`.
- `npm audit` reports no remaining high or critical vulnerability attributable to the previous Next.js version.
- `npm run lint` exits successfully.
- `npm run build` exits successfully and produces the configured standalone artifact.

## 2. User Experience & Functionality

**User Personas**:

- Site visitors who need the existing landing page to behave unchanged.
- Project maintainers responsible for secure production deployments.

**User Stories**:

- As a project maintainer, I want the Next.js runtime upgraded so that the deployed landing page no longer uses the scanned vulnerable version.
- As a site visitor, I want the landing page, navigation, language switcher, media, and contact links to work exactly as before after the dependency upgrade.
- As a release operator, I want automated validation of dependencies, linting, and the production build before deployment.

**Acceptance Criteria**:

- The only dependency change is the direct `next` version and its lockfile resolution/transitive updates required by that upgrade.
- No component, copy, styling, asset, route, environment variable, or runtime feature is intentionally changed.
- Existing page navigation, language switching, external contact links, media, and map embed remain present in source.
- `npm install` completes without dependency resolution errors.
- `npm audit` completes and the previous Next.js advisory is no longer applicable to the resolved version.
- `npm run lint` completes with exit code `0`.
- `npm run build` completes with exit code `0` and preserves `output: 'standalone'`.
- Any unrelated pre-existing working-tree changes remain untouched.

**Non-Goals**:

- No UI redesign or content changes.
- No new security headers, authentication, API routes, middleware, rewrites, or server actions.
- No upgrade of unrelated dependencies unless required for Next.js compatibility or installation integrity.
- No remediation of deferred `postcss` or `firebase-tools` advisories in this change.
- No deployment, hosting, or operating-system migration.

## 3. AI System Requirements (If Applicable)

Not applicable. This is a dependency maintenance and security remediation change; no AI runtime or model behavior is introduced.

## 4. Technical Specifications

**Architecture Overview**: Update the direct dependency in `package.json`; regenerate the npm lockfile; install the resolved dependency graph; run lint and production build checks. The existing Next.js App Router application and standalone output configuration remain unchanged.

**Integration Points**:

- `package.json`: update the direct `next` dependency to `16.3.8`.
- `package-lock.json`: regenerate the lockfile using npm so the resolved Next.js graph matches the declared version.
- `next.config.ts`: retain `output: 'standalone'` and all existing settings.
- CI or local validation: run `npm install`, `npm audit`, `npm run lint`, and `npm run build`.

**Security & Privacy**:

- The change removes the known vulnerable Next.js resolution from the production dependency graph.
- No user data, credentials, environment variables, or external services are added or changed.
- Dependency installation must use the committed lockfile and must not introduce unreviewed packages beyond required transitive updates.
- Verify the deployed artifact uses the newly generated lockfile before release.

## 5. Risks & Roadmap

**Phased Rollout**:

- **MVP**: Update `next` to `16.3.8`, regenerate `package-lock.json`, and run all acceptance checks.
- **v1.1**: Deploy the validated standalone artifact to the existing staging or preview environment and smoke-test the landing page.
- **v2.0**: Add CI enforcement for high and critical production dependency advisories if no equivalent check already exists.

**Technical Risks**:

- Next.js patch-level changes may alter build output or expose existing lint/type errors; resolve only issues caused by this upgrade.
- npm may update transitive packages in the lockfile; review the diff and reject unrelated dependency churn.
- The Codex finding's exploitability depends on deployment OS and enabled runtime features; confirm the deployment uses the patched artifact.
- If `16.3.8` is unavailable in the configured registry at implementation time, stop and select the current stable patched release rather than falling back to `16.2.10`.
