import React from "react";



const Article = (props) => {
    return (
        <div className=" ui centered card" style={{ width: '60%' , backgroundColor: '#bfbfbf' , borderBlockColor: 'black' , borderBottomStyle: 'inset'}}>
            <div className="image">
                <img src="https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg" />
            </div>
            <div className="content">
            <a class="header">{props.header}</a>
                <div className="detail">{props.children}</div>
                <div className="description">
                    <p>
                        {props.description}
            </p>
                </div>

            </div>
        </div>
    );
};

export default Article;