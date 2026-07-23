<script setup>
import { Button, Card, Checkbox, Divider, FloatLabel, InputText, Password } from 'primevue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4">
    <Card class="w-full max-w-md">
      <template #title> Welcome Back </template>

      <template #subtitle> Sign in to continue your checkout. </template>

      <template #content>
        <div class="space-y-5">
          <FloatLabel>
            <InputText id="email" class="w-full" />
            <label for="email">Email</label>
          </FloatLabel>

          <FloatLabel>
            <Password id="password" toggleMask :feedback="false" fluid />
            <label for="password">Password</label>
          </FloatLabel>

          <div class="flex justify-between items-center text-sm">
            <div class="flex items-center gap-2">
              <Checkbox binary />
              <label>Remember me</label>
            </div>

            <Button link label="Forgot password?" />
          </div>

          <Button class="w-full" label="Sign In" />

          <Divider align="center"> OR </Divider>

          <Button outlined icon="pi pi-google" class="w-full" label="Continue with Google" />

          <div class="text-center text-sm">
            Don't have an account?
            <RouterLink to="/register" class="text-primary font-medium">
              Create Account
            </RouterLink>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
