---
title: How to build a platform team
category: Leadership
date: 2023-08-22
published: false
excerpt: |
    
coverImage: /trust_vs_agility.jpg
---

## Preface

You know the drill: make a company, build a product that generates money, and then build a framework that has nothing to do with your company. Engineers love to play with technology, and sometimes we forget that the aim is to serve our users. But hey, we need to prepare for the future, and the current solution will not scale ten years from now - let's invest, right? Right!? In this article, I will explain when and why we should build platform teams and how they should look from the start. 

## Why do we need a platform team?

Looking from the business perspective, a platform team creates an optimization opportunity. Like product teams create value directly for users, platform teams create value for product teams. Here's a list of things I've seen good platform teams do:
- They create golden paths. If followed, they unburden the product teams from making decisions that are not core to their business. How do I deploy my app? How can I scale correctly? How do I configure my application, store secrets, or observe its behavior in production?
- They provide standards for valuable features, so wheels don't need to get reinvented. How do I implement authentication or use a database according to best practices? How do I secure my application when deployed?
- They provide company-wide observability for investment decision-making. If we invest in these features, how will it affect our budget? What can we do to optimize our costs?

Ultimately, Platform Team serves one purpose: **Let product engineers focus on the product**.

## Measuring the success of a platform team

The leading measurement of platform teams I've seen was [DORA](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance), a.k.a. Deployment Frequency, Lead Time for Changes (from commit to production), Mean Time to Restore, and Change Failure Rate. While DORA is a good start, any team working with a nicely set-up Continuous Integration system will not see much improvement after a while. The reason is simple: we are good at automating engineering efforts.

The real challenge becomes the time from idea to production that involves plenty of human interaction. Unfortunately, a platform team can't measure its success by such a metric since many factors come into play. Tedious product discovery, business decisions, and engineering time of something we never did before are just a few examples. So what do we do?

Let's **measure satisfaction, engagement, and touchpoints**. You might be asking how these are even objective, but I will stand by my words: What an engaged engineer does in 2 hours, a disengaged one will do in 2 weeks. 