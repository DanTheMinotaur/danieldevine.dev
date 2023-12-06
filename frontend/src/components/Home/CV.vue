<template>
  <article id="cv" class="panel">
    <header class="major">
      <h1>Work Experience</h1>
      <p>Here you can find more in-depth infomation about my previous roles. </p>
    </header>
    
    <section v-for="job in cvData" :key="job.company" >
      <h2>{{ job.company }} | {{ job.job_title }}</h2>
      <span>{{ job.start_date }} - {{ job.end_date }}</span>
      <p>{{ job.job_description }}</p>
      <vue-simple-markdown :source="job.job_projects" v-if="job.job_projects"></vue-simple-markdown>
      <ul>
        <li v-for="lang in job.programming_languages" :key="lang">
          {{ lang }}
        </li>
      </ul>
      <ul>
        <li v-for="lang in job.programs_frameworks" :key="lang">
          {{ lang }}
        </li>
      </ul>
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
    }
  };
  </script>