<script setup>

import Post from '../Post.vue'
</script>

<template>
  <Post title="EJS vs. Handlebars">
    <template #content>
      <p>
        Handlebars and EJS appear interchangeable at first, two options if you need a minimal but reliable HTML templating solution that doesn't have the same SPA ambitions of popular tools and frameworks.
        When I was tasked with finding a decent solution for a college project, I looked into EJS and was pleasantly surprised by its intuitiveness and ease of use. The idea that 
        the developers wished to avoid having their users learn specialized syntax that would inevitably grow in its requirements and scope, instead letting them use a familiar and
        Turing-complete language from the start, seemed very sensible to me. It significantly shrunk the learning curve and let me whip up a demo in a few minutes.
      </p>
      <p>However, when one of my teammates suggested Handlebars due to their previous experiences with it, I was presented with a compeltely different paradigm. Expecting the switch from 
      EJS to Handlebars to be easy, I found instead that they were built on entirely separate philosophies. Handlebars is a successor to Mustache, and its design intent is to prevent
      users from coupling too much UI logic into their templates, wanting them to be as separate as possible. You have a handful of pre-defined functionalities (#each, #if, #else)
      but any more complex logic is intended to go outside of the template, passing in the necessary attributes or creating custom functions to suit your needs.
      </p>

      <p>I didn't expect tools that I regarded as intentionally simplictic to so strongly disagree with each other, which in retrospect was a mistake. Strongly opinionated technologies
      benefit from a unifying vision that can guide developers forward, even at the expense of alienating users it disagrees with. Personally, I will be sticking with EJS for any problem
      where a full-featured framework is an excessively ambitious solution.</p>

    </template>
  </Post>
</template>