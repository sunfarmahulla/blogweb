import Layout from '../../../components/Layout';
import Link from 'next/link';
import Private from '../../../components/auth/Private';
import BlogRead from '../../../components/crud/BlogRead';

import {isAuth} from '../../../actions/auth';

const Blogs = () => {

    const username = isAuth && isAuth().username;

    return (
        <Layout>
            <Private>
                <div className="col-md-12 pt-5 pd-5">
                    <h2 className>Manage Blogs</h2>

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogRead username={username} />
                    </div>
                   
                    
                </div>
            </Private>
        </Layout>

    );
};

export default Blogs;