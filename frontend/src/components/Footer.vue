<template>
    <footer id="footer">
        <div class="copyright">
            <span>&copy; danieldevine.dev</span>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
#footer {
  padding: 4em 0 2em 0;
  background: #f2f2f2;

  .copyright {
    color: #bfbfbf;
    font-size: 0.9em;
    margin: 0 0 2em 0;
    padding: 0 1em;
    text-align: center;
  }
}

@media screen and (max-width: 736px) {
  #footer {
    padding: 3em 0 1em 0;
  }
}
</style>