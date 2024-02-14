import { CLERK_SECRET_KEY } from '$env/static/private';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
import { Clerk } from '@clerk/clerk-sdk-node';

const clerk = Clerk({
	secretKey: sk_test_Gcvh76lrPtdw47vwLL8T0mj5kZmx5L15y0mLxEx082,
	publishableKey: pk_test_dG9nZXRoZXItZ2hvdWwtNy5jbGVyay5hY2NvdW50cy5kZXYk
});

export default clerk;
