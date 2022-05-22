import React from 'react'
import eventRem from './images/eventRem.png'
import discussionForum from './images/discussionForum.png'
import recipeRec from './images/recipeRec.png'

const Project = () => {
  return (
    <div class="container project" id="projects">
    <h1>Projects</h1>
    <div class="projectContainer row">
      <div class="introImg col-md">
      <div class="card" >
            <img src={recipeRec} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Recipe Recommender</h5>
                <p class="card-text">A content based recommender system which uses cosine similarity to give recommendations. The recipes are recommended based on ingredients, cuisines and diet type. Web scrapping library beautiful soup is used to scrape image links from the data.</p>
                <a href="https://github.com/disha4091/RecipeRecommender" class="btn btn-primary">Link</a>
            </div>
        </div>
      </div>
      <div class="introImg col-md">
      <div class="card" >
            <img src={discussionForum} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Student Clan</h5>
                <p class="card-text"> An online platform where students can discuss their doubts related to various engineering domains. The technologies used are ReactJs, MongoDB, Express, NodeJs.</p>
                <a href="https://github.com/disha4091/Discussion_Forum" class="btn btn-primary">Link</a>
            </div>
        </div>
      </div>
      <div class="introImg col-md">
      <div class="card" >
            <img src={eventRem} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Event Reminder</h5>
                <p class="card-text">A website which helps you remember all your events including birthdays, anniversaries, meetings and many more. The technologies used are ReactJs, MySQL, Express, NodeJs, HTML, CSS</p>
                <a href="https://github.com/disha4091/EventReminderApp/" class="btn btn-primary">Link</a>
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Project