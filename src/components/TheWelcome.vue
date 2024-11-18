<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Handlebars vs. JS</template>
    I break down my impressions two popular templating tools, cutting through their diverging core philosophies.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Simple and dangerous: Arc's code execution vulnerability</template>
    A hot new browser alternative based on Chromium allowed users to save custom JS code, but careless use of DaaS tools led to a critical attack vector for their users.
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>My first experience with ORM (Object Relational Mapping)</template>

    
  </WelcomeItem>
</template>
