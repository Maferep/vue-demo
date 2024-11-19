<script setup>

import Post from '../Post.vue'
</script>

<template>
  <Post title="My first experience with ORM (Object Relational Mapping)">
    <template #content>
      <p>
        When my team and I were deciding on the tech stack for our Twitter-like mobile application, our most experienced developer helped us a great deal in picking 
        comfortable yet cutting-edge tools for the job. 
      </p>
      <p>My task was to act as mostly a backend developer, implementing endpoints for the RESTful API that would be exposed to the app. We had a mandate to use a relational and a non-relational database for the project,
      the latter intended for multimedia storage, but I almost excluively worked with the former as we set up the main feed, follows, reposts and the like.
      At the time I had little experience working with SQL besides some courses, so once I learned we would be using ORM, I knew I was underprepared for the task. I dove 
      deep into the SQLAlchemy documentation, feeling lost and disoriented while trying to build what are now, to me, fairly basic table joins.</p>

      <p>The syntax itself was pretty. But in order to truly understand it instead of mindlessly shoving pieces together until something worked, I needed to actually parse
      the individual interfaces and purpose of every single intermediate object involved in each line of code, which quickly became a draining task. One of the first things I figured out is that, for fairly complex
      requests, it makes more sense to first type out a valid SQL query and only then attempt to translate it into SQLAlchemy's system. It was a pain, but admittedly one worsened
      by lack of truly deep knowledge of SQL and its design principles.</p>

      <p>One of the stated benefits of using ORM is abstracting yourself from the inconsistencies between Database Engines. It is a respectable goal. However, once I actually dedicated serious
      time into reading about SQL, it became clear that memorizing or researching the small differences in syntax between providers was a much simpler task than the total of effort
      I had to dedicate to SQLAlchemy's object mapping layer. For a small team, there really wasn't much point in my mind. If you don't know SQL, ORM won't save you. If you do know SQL,
      you're better off starting your database using SQL queries aided by some sort of automatic syntax correction tooling.</p>

    </template>
  </Post>
</template>