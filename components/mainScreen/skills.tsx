import Card from "./card";

export default function Skills() {
    return(

        <div className="flex space-x-3 mt-16 mx-auto">
                <Card pageLink='' title='About Me!' content={["Honors graduate from the University of", "Houston seeking an entry-level position", "as a React full stack web developer.", "Worked on group web projects, and", "made portfolio websites for consumers."]}/> 

                <Card pageLink='/resume' title='Skills' content={["Languages: JavaScript, C++, Python", "Front-End Framework: React", 
                "Game Engine: Unity", "Databases: NoSQL (MongoDb), Dgraph", "Source Control: Git, PlasticSCM", "Operating System: Windows", "Tailwind CSS, CSS"]}/> 

                <Card pageLink='gamedevelopment' title='Games' content={["2D Space Shooter: HullBreakers", "Arcade Game: Butterslide"]}/> 

                <Card pageLink='websites' title='Web Apps' content={["Reservation System: OpenTable", "Personal Portfolio: this website"]}/> 
        </div>
 
    )
}