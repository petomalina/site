---
title: What went wrong with "You build it, you run it" 
category: Engineering
date: 2023-09-12
published: false
excerpt: |
    The idea of "you build it, you run it" was very promising to me a couple of years ago. Unfortunately, its execution
    is far more complicated than it seems. Turns out it's not a silver bullet.
coverImage: /you_build_it_you_run_it.png
---

## Preface

If you've lived close to the DevOps world in the past couple of years, the idea of "You build it, you run it" is not new to you.
I loved it because it **theoretically solves the challenge of interactivity between users and engineers**. If a user has a problem,
an engineer now has that problem. No more throwing of issues across invisible walls because "it's my job to write, not to scale the application."

As years passed and I tried to get closer to this vision with the teams I led, I observed a couple of clashes with other principles I wanted to follow.
As an example, at Kiwi.com, we sell flight tickets. A value proposition of an engineer should thus be that we will **sustainably sell more** tickets.
But how do we know whether we are effectively investing in sustainability or just wasting time? 

## What does "You build it, you run it" mean?

The primary idea is to place engineers as close to users as possible so the team can address their struggles directly.
The team is also motivated to build the product sustainably because they are on-call, and a bug they let into production might wake
them up at night. The team can pick their technologies and run them as they like since they are responsible end-to-end.

While it's a compelling idea for small companies leveraging the latest managed serverless technology, it's rather utopic for a large-scale product. Managed services are not cheap; they probably never will be. A friend once said: "A managed technology just means you pay others to cry instead of you," which perfectly describes the state of today's technology. One day, that bill becomes large enough for your organization to cry a bit to save money.

## The Era of Cognitive Waste

The cognitive load required to make changes scales as product scales. Features and feature combinations are commonly hard enough to grasp without even considering technical limitations. And so, as companies scale, it's increasingly important that people **use their cognitive energy to build value for customers**. Why waste it on something we can standardize so they don't need to worry about it?

You might say that we can still invest enough into internal tools for engineering so that, in the end, they can quickly build their applications however they like and efficiently run them as they want. However, I will argue that, more often than not, it's not worth it because such an internal product has only one customer (FAANGs are an exception in this because that one customer is enormous).

## Flexibility | Sustainability: Pick one

While giving people freedom and flexibility in technology is like a magnet for engineers on the market, it also tends to attract technological masturbators
(people who don't care about what they are building as long as it's in the newest, shiniest technology). A startup will benefit from this because a
motivated engineer will have extremely high output under pressure. Moreover, **startups tend to sacrifice sustainability** because there's nothing to be sustainable about if they can't sell their product in the first place.

As the company grows, it shifts into the cooperation mode. Why do we let every team reinvent their delivery process when we can invest once and let everyone else leverage it? Can we start using the same logging techniques so we can actually find stuff? Can we use the same technology so we can learn
from each other? Suddenly, all the flexibility becomes secondary as building applications at scale becomes challenging.

Companies nowadays make Platform teams to address these scaling issues. Such teams provide company **standards and golden paths that avoid the complexity** of underlying (more efficient) technology. The value of a Platform team is more or less purely economic in this sense. The platform combines technologies into non-flexible but highly efficient bundles. Unfortunately, most of the ideas behind "You build it, you run it" are, at this point, no longer present because the company relies on an internal, well-defined stack of technologies.

## Finding the Breakpoint

We can't let people go full YOLO on technologies, but investing in tools or platforms also has limits. I like to think about any internal project that doesn't directly benefit end customers (the ones that pay your salary) as temporary. Generally, we want a platform project only if it positively affects:
- Engineering Productivity, or
- Workload Efficiency

Regarding engineering productivity, the rules are: measure the time between touchpoints of active engineering, e.g., how long does it take for a newcomer to deploy their application? Do your math of how much you need to invest and decide whether it makes sense to optimize it. If you have too many touchpoints and don't know where to start, run an engagement survey and ask people where they see non-productive barriers in their day-to-day work.

The workload efficiency seems simple, but it is complex. Be aware that you will want to watch engineering productivity and touchpoints on the things you change since many optimizations (e.g., changing a vendor that replaces a daily-used UI) might cost you more development time than you saved on your bill. Be prepared to roll back if necessary.

## Wrapping up

It was tough for me to realize that internal engineering teams such as platforms don't primarily have value when built around shiny new technology but around dull, well-defined standards. Exploration of technologies must still be part of the team, and we must deeply consider the value we bring with the new technology.
