import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuthenticated } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';

const CreateBlog = () => {
	return (
		<div>
			<h1> Hello world</h1>
		</div>
	);
};

export default CreateBlog;
