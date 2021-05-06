import React from "react";
import Article from './Article';
import PublisherDetail from "./PublisherDetail";
import faker from 'faker';

const App = () => {
    return (
        <div>
            <Article
            header = "lorem ipsum"
            
            description = {faker.lorem.paragraphs()}
            >
                <PublisherDetail
               published = "Published By: lorem joon"
               time = {Math.floor(Math.random() * 31) + " " + faker.date.month()}
                />
            </Article>
        </div>
    );
};

export default App;