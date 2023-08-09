---
title: Why Trust is more than Agility
category: Leadership
date: 2023-08-12
published: true
excerpt: |
    It’s incredibly easy to get sidetracked once we start playing the game of mistrust and numbers. Most of the time we don’t even know we are playing it because it makes sense that our boss wants to know whether our team is efficient, right?
coverImage: /trust_vs_agility.jpg
---

## Preface

Whenever I ask somebody working in an agile team how they would describe agile, they always start by naming the ceremonies: planning, retrospective, standup, and whatnot. As a leader who has always strived for team productivity (as in: we deliver great value to our customers), not just a meaningless structure of meetings, it baffled me that my teams perceived agility similarly as described above. What did I do wrong?

## On trust between engineering and management

If management requires teams to adhere to a common agile standard, they likely don’t trust the teams. Instead of fixing their relationship with the teams, management tends to slap a process on top, so they can continue not caring about the people. This will seemingly work for a scaling company sitting on a revenue stream because money still flows. However, from this point on, such a company will rely on the value that was created in the past and a huge marketing/sales spend. A breaking point will come when they hold all the meetings they are supposed to, all the sprints have 100% committed delivery, and the company is bleeding money. Damnit agile! We are supposed to be making it right according to our KPIs, OKRs, MBOs, CSFs, ROIs, …!

If you work in a company with two levels of management (e.g., CEO → line manager → you), I hope you don’t feel this way. These challenges arise when 3+ levels of management are present since the C-level will likely not have time or energy to be in weekly contact with all their middle managers. And so to **create a sense of control**, reports of efficiency (e.g., # of story points delivered) are created. The spiral of meaningless numbers starts.

## When we focus on efficiency instead of value

It’s incredibly easy to get sidetracked once we start playing the game of mistrust and numbers. Most of the time, we don’t even know we are playing it because it makes sense that our boss wants to know whether our team is efficient, right?

Well, I believe every leader must be able to answer why their team exists, what kind of challenge they are solving for their users, and how they know they are running in the right direction (when are they successful). And so, forging agile numbers for an efficiency report is meaningless because a team’s success reflects its efficiency. 

In my couple of years of experience as a leader, I’ve asked these questions one too many times, and it almost always catches people off guard - especially those working for larger companies. “We are just a small part of a large project, and so we know we are successful when we deliver what our manager wants from us” - some answer. This is a standard answer indicating that the company has sacrificed customer value creation for nice-looking reports giving a sense of control to senior managers and investors.

Some managers will argue that without efficiency metrics, we can't say whether we just had luck with our delivery or are actually good at what we do. But would you rather run slow in the right direction or fast in the wrong one? Efficiency metrics take our focus away from the actual value we should be creating for a false sense of control over the team.

> We placed rocket boosters on our car. Now we go fast, just don’t know where.

## A way out

I’ve been ranting until now, but what can we do about this?

For now, my only working cure was to directly approach the managing team members and ask them how they perceive the work of my teams. At the time, I was leading infrastructure teams handling a cloud budget for tens of teams across the company. Their answer surprised me: “If we don’t hear about you, it’s positive because we only hear about the screw-ups in the budget.”

I got into thinking and came up with a simple report of our success, reflecting the unit economics of the business (how much on infrastructure do we pay for each customer transaction). I’ve made it a mission of my teams to make this information easily reachable and addressable for any engineering team. And so a couple of weeks after, instead of reporting only what went wrong, we could report the value for our users (engineering teams). This shifted the focus of senior managers from the team efficiency metrics to the actual numbers of success that impact business.

> Note on the value of unit economics observability: startup-culture companies like to move fast even with a trade-off of sometimes breaking things. Adding near-realtime information about spend across ~30 infrastructrure & tooling vendors helps us avoid costly reverts when the invoices come in, since we can revert or patch solutions the next day. This saves both, budget, and time of engineers. 

## Wrapping up

It all starts with building mutual trust. **Only if we trust each other can we avoid meaningless numbers** that give us a fake sense of control and focus on what’s growing the company to serve our users better.

Instead of measuring story points or sprints, find a way to measure your success in terms of value for your users. Everything else will follow naturally. Once you have that and find story points or ceremonies useful, go ahead and use them. However, don’t let them become a goal in itself. 
