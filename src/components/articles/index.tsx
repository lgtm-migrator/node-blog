import styled from '@emotion/styled';
import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/reducers/articles';
import Categories from '../categories';
import ArticleItem from './item';

const UL = styled.ul((_) => ({
    backgroundColor: '#fff',
    flex: '1 0 auto',
    listStyle: 'none',
    margin: 0,
    padding: 0
}));

class Articles extends React.Component<any, any> {
    public render() {
        const { articles } = this.props._DB;
        return (
            <div>
                <Categories></Categories>
                <UL>
                    {
                        articles.map((item: any) => (
                            <ArticleItem item={item} key={item._id}></ArticleItem>
                        ))
                    }
                </UL>
            </div>

        );
    }
}

export default connect(
    (state: State) => ({
        _DB: state.articles
    })
)(Articles as any);