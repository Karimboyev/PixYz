<template>
    <div class="aboutSection2">
        <div class="container">
            <h2 >About PixYz Agency</h2>
            <p>
                A team is a group of individuals (human or non-human) working together to achieve their goal. 
As defined by Professor Leigh Thompson of the Kellogg School of Management, "[a] team is a group of people who are 
interdependent with respect to information, resources, knowledge and skills and who seek to combine their efforts to achieve a 
common goal".A group does not necessarily constitute a team. Teams normally have members with complementary skills
and generate synergy
through a coordinated effort which allows each member to maximize their strengths and minimize their weaknesses. Naresh 
Jain (2009) claims:

Team members need to learn how to help one another, help other team members realize their true potential, and create an 
environment that allows everyone to go beyond their limitations.

While academic research on teams and teamwork has grown consistently and has shown a sharp increase over the past recent 
40 years, the societal diffusion of teams and teamwork actually followed a volatile trend in the 20th century. The concept was 
introduced into business in the late 20th century, which was followed by a popularization of the concept of constructing teams.  
Differing opinions exist on the efficacy of this new management fad.
Some see "team" as a four-letter word:  overused and under-useful.
Others see it as a panacea that realizes the human-relations movement's desire to integrate what that movement perceives as 
best for workers and as best for managers.
Still others believe in the effectiveness of teams, but also see them as dangerous because of the potential for exploiting 
workers — in that team effectiveness can rely on peer pressure and peer surveillance.
However, Hackman sees team effectiveness not only in terms of performance: a truly effective team will contribute to the 
personal well-being and adaptive growth of its members.English-speakers commonly use the word "team" in today's society to 
characterise many types of groups. Peter Guy Northouse's book Leadership: theory and practice
discusses teams from a leadership perspective. According to the team approach to leadership, a team is a type of 
organizational group of people that are members. A team is composed of members who are dependent on each other, work 
towards interchangeable achievements, and share common attainments. A team works as a whole together to achieve certain 
things. A team is usually located in the same setting as it is normally connected to a kind of organization, company, or 
community. Teams can meet in-person (directly face-to-face) or virtually when practicing their values and activities or duties. A 
team's com
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutSection2",
}
</script>
<style lang="scss">
    @font-face {
        font-family: "comfortaa";
        src: url("../assets/fonts/Comfortaa-Bold.ttf") format('truetype');
    }
    @font-face {
        font-family: "HelveticaNeueCyr-Roman";
        src: url("../assets/fonts/HelveticaNeueCyr-Roman.otf") format('truetype');
    }
    .aboutSection2{
        h2{
            margin-top: 100px;
            font-family: comfortaa;
            text-align: center;
            color: #217A73;
        }
        p{
            font-family: HelveticaNeueCyr-Roman;
            color: #8A8A8A;
            line-height: 40px;
            @media(min-width:1441px){
                font-size: 24px;
            }
            @media(max-width:992px){
                line-height: 20px;
            }
        }
    }
</style>