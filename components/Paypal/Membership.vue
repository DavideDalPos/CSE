<template>
  <form
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
  >
    <input
      type="hidden"
      name="cmd"
      value="_s-xclick"
    />
    <input
      type="hidden"
      name="hosted_button_id"
      value="2NX8BAGBQES2W"
    />

    <input
      type="hidden"
      name="on0"
      value="Select membership year"
    />
    <div>
      <label class="block">Select membership year</label>
      <select
        class="border px-2 bg-foreground"
        name="os0"
      >
        <option
          v-for="membership in memberships"
          v-bind="membership"
        />
      </select>
    </div>
    <div class="my-2">
      <input
        type="hidden"
        name="on2"
        value="Optional invoice # or comments"
      />
      <label class="block">Optional invoice # or comments</label>
      <input
        class="border bg-foreground"
        type="text"
        name="os2"
        maxlength="60"
      />
      <input
        type="hidden"
        name="on1"
        value="New member?"
      />
    </div>
    <div class="my-2">
      <span>New member? </span>
      <select
        class="border px-2 ml-2 bg-foreground"
        name="os1"
      >
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
    <div>
      <input
        type="hidden"
        name="currency_code"
        value="USD"
      />
      <input
        type="image"
        src="https://www.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </div>
  </form>
</template>

<script setup>
const memberships = [
  {
    label: '2021 Membership $40.00',
    value: '2021 Membership'
  },
  {
    label: '2022 Membership $40.00',
    value: '2022 Membership'
  },
  {
    label: '2023 Membership $40.00',
    value: '2023 Membership'
  },
  {
    label: '2024 Membership $40.00',
    value: '2024 Membership',
    selected: true
  },
  {
    label: '2025 Membership $40.00',
    value: '2025 Membership'
  },
  {
    label: '2026 Membership $40.00',
    value: '2026 Membership'
  }
]
</script>
