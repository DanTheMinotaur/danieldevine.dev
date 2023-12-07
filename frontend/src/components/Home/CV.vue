<template>
  <article id="cv" class="panel">
    <header class="major">
      <h1>Work Experience</h1>
      <p>Here you can find more in-depth infomation about my previous roles. </p>
    </header>
    
    <section v-for="job in cvData" :key="job.company" class="jobs">
      <section>
        <h2 v-bind:id="job.anchor">{{ job.company }} <span>| {{ job.job_title }}</span></h2>
        <hr/>
        <span>{{ job.start_date }} - {{ job.end_date }}</span>
        <p>{{ job.job_description }}</p>
      </section>

      <section class="projects">
        <h3>Projects/Tasks</h3>
        <vue-simple-markdown :source="job.job_projects" v-if="job.job_projects"></vue-simple-markdown>
      </section>
      <section class="skills">
        <h3>Laugauges</h3>
        <ul>
          <li v-for="lang in job.programming_languages" :key="lang">
            {{ lang }}
          </li>
        </ul>
        <h3>Tools/Frameworks</h3>
        <ul>
          <li v-for="lang in job.programs_frameworks" :key="lang">
            {{ lang }}
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>
  
<script>
import gql from 'graphql-tag'


export default {
  name: 'CV',
  title: 'CV/Resume',
  data() {
    return {
      cv: []
    }
  },
  computed: {
    cvData() {
      if (this.cv.CV == null) return []
      return this.cv.CV.map(d => {
        const formatted = {...{}, ...d}
        delete formatted.__typename
        formatted.programming_languages = formatted.programming_languages.map(p => p.language)
        formatted.programs_frameworks = formatted.programs_frameworks.map(p => p.tool)
        formatted.end_date = this.dateToStringMonth(formatted.end_date)
        formatted.start_date = this.dateToStringMonth(formatted.start_date)
        formatted.anchor = formatted.company.toLowerCase().replace(' ', '')
        return formatted
      })
    }
  },
  apollo: {
      cv: gql`
          query {
              cv {
                  CV {
                      job_title
                      company
                      job_projects
                      start_date
                      end_date
                      job_description
                      programming_languages { language }
                      programs_frameworks { tool }
                  }
              }
          }
    `,
  },
  methods: {
    anchorHashCheck() {
      const hash = this.$route.hash
      if (window.location.hash === hash) {
        
        const el = document.getElementById(hash.slice(1))
        if (el) {
          window.scrollTo({
            top: el.offsetTop + 200,
            left: 0,
            behavior: "smooth"
          })
        }
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.anchorHashCheck()
    }, 500)
  },
};
</script>

<style lang="scss" scoped>
  .jobs {

    hr {
      padding: 0;
      margin: 0;
    }

    h2 {
      span {
        font-size: 70%;
        color: rgb(119, 119, 119);
      }
    }

    p {
      font-size: 1.2rem;
      line-height: 200%;
    }
    
    span { font-size: .65em; }

    section {
      margin-bottom: 1.2em;
    }

    .projects {
      margin-bottom: .5em;
    }

    h3 {
        margin-bottom: 1%;
    }

    .skills {
      ul {
        font-size: .8em;

        li {
          line-height: normal;
        }
      }
    }
  }

  .markdown-body {
    white-space: normal;
  }

</style>
