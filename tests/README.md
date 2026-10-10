Frontend interaction regression test, using jsdom with the shipped HTML and scripts.

```sh
npm install --prefix /tmp/rednote-test-deps jsdom --no-audit --no-fund
NODE_PATH=/tmp/rednote-test-deps/node_modules node tests/palm-flow.cjs
NODE_PATH=/tmp/rednote-test-deps/node_modules node tests/private-palm-flow.cjs
NODE_PATH=/tmp/rednote-test-deps/node_modules node tests/comment-interaction-flow.cjs
NODE_PATH=/tmp/rednote-test-deps/node_modules node tests/swipe-palm-flow.cjs
NODE_PATH=/tmp/rednote-test-deps/node_modules node tests/palm-refinement-flow.cjs
```

Covers the A → B → A → B → A public response chain, notification anchors, local high-five animation, cancellation, late participation, unchecked reminders, participant aggregation, invitation closure, deleted-comment tombstones, normal comments/likes/replies, shared chats, escaping and persisted state. Browser layout is not asserted by this DOM test.

The private branch test verifies no automatic DM on public participation, explicit recipient selection for aggregated events, one delivered animation message per invitation/person, local replay, both-way chat, no duplicate interaction notification, source navigation, persisted deduplication and deleted-source handling.

The comment interaction test covers long press versus quick tap/swipe, a half-height action sheet, edits preserving invitation participants, keyboard menu access, role permissions, the shared headerless composer and backdrop dismissal.

The swipe test begins with the seeded ordinary comment, converts via the owner menu, checks direction/threshold/cancellation and pointer-versus-long-press arbitration, verifies closed/reopened participant preservation, tests failed storage rollback, and follows public and private responses. Avatar contact geometry is defined in CSS; actual touch feel and visual timing require manual device review.

The refinement test checks the dedicated second settings card, full ordinary-comment restoration after an unused palm is closed, click and menu cancellation preserving delivered notifications, shared composer structure, measured avatar coordinates across drag/release, the motion layer outside scroll clipping, and historical participation/reminder lifecycle.
