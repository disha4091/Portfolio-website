import React from 'react'
import react from './images/react.png'
import c from './images/c.png'
import cpp from './images/cpp.png'
import java from './images/java.png'
import python from './images/python.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.JPG'
import git from './images/git.png'
import mongo from './images/mongo.png'
import mysql from './images/mysql.png'
import bootstrap from './images/bootstrap.png'
import express from './images/express.png'
import node from './images/nodejs.png'


const Skill = () => {
  return (
    <div class="container about" id="skills">
    <h1>Skills</h1>
    <div class="skillContainer row">
        <div class="skill col">
            <img src={c} title="C"/>
        </div>
        <div class="skill col">
            <img src={cpp} title="C++"/>
        </div>
        <div class="skill col">
            <img src={java} title="Java"/>
        </div>
        <div class="skill col">
            <img src={python} title="Python"/>
        </div>
    </div>
    <div className='row'>
        <div class="skill col">
            <img src={html} title="HTML"/>
        </div>
        <div class="skill col">
            <img src={css} title="CSS"/>
        </div>
        <div class="skill col">
            <img src={js} title="Javascript"/>
        </div>
        <div class="skill col">
            <img src={bootstrap} title="Bootstrap"/>
        </div>
        <div class="skill col">
            <img src={git} title="Git"/>
        </div>
    </div>
    <div className='row'>
        <div class="skill col">
            <img src={mongo} title="MongoDB"/>
        </div>
        <div class="skill col">
            <img src={mysql} title="MySQL"/>
        </div>
        <div class="skill col">
            <img src={express} title="Express"/>
        </div>
        <div class="skill col">
            <img src={node} title="Node"/>
        </div>
        <div class="skill col">
            <img src={react} title="React"/>
        </div>
    </div>
    </div>
  )
}

export default Skill ;