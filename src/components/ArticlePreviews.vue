<script setup lang="ts">
import PostPreview from './PostPreview.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <PostPreview>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Handlebars vs. EJS</template>
    I break down my impressions two popular templating tools, cutting through their diverging core philosophies.
  </PostPreview>

  <PostPreview>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Simple and dangerous: Arc's code execution vulnerability</template>
    A hot new browser alternative based on Chromium allowed users to save custom JS code, but a subtle error in their BaaS tooling led to a critical attack vector for their users.
    
  </PostPreview>

  <PostPreview>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>My first experience with ORM (Object Relational Mapping)</template>

    
  </PostPreview>
</template>
