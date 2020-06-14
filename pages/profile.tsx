import { NextPage } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import useSWR from 'swr'
import { Button, CircularProgress, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

interface Profile {
  name: string
}

export const Page: NextPage = () => {
  const classes = useStyles()
  const profile = useSWR<Profile>('/api/profile')
  if (profile.error) {
    return (
      <Container className={classes.container}>
        <Typography variant='h2'>
          Failed to load: {profile.error}
          <Button onClick={() => profile.revalidate()}>Retry</Button>
        </Typography>
      </Container>
    )
  }
  if (!profile.data) {
    return (
      <Container className={classes.container}>
        <CircularProgress />
      </Container>
    )
  }
  return (
    <Container className={classes.container}>
      <Typography variant='h1'>Hello {profile.data.name} !</Typography>
      <div className={classes.buttonWrapper}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => profile.revalidate()}
          disabled={profile.isValidating}
        >
          Revalidate
        </Button>
        {profile.isValidating && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </Container>
  )
}

export default Page
