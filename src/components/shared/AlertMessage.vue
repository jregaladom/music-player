<template>
    <div class="bg-red-400 text-center py-4 lg:px-4">
        <div class="p-2 bg-red-600 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div class="font-semibold mr-2 text-left flex-auto px-2 py-1">
                <slot name="content">
                    Ocurrio un problema
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
