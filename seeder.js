const fs = require('fs')

const importData = async () => {
    try {
        const sampleData = {
            todos: [
                { id: '1', title: 'Buy Chicken', createdAt: new Date() },
                {
                    id: '2',
                    title: 'Bulid Todos App with react',
                    createdAt: new Date(),
                },
                {
                    id: '3',
                    title: 'Learn redis form codedamn',
                    createdAt: new Date(),
                },
                {
                    id: '4',
                    title: 'Learn nextjs form traversy media',
                    createdAt: new Date(),
                },
            ],
        }

        fs.writeFileSync('db.json', JSON.stringify(sampleData), {
            encoding: 'utf-8',
        })
    } catch (err) {
        console.log('An error occured!')
        console.log(err)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        const sampleData = { todos: [] }

        fs.writeFileSync('db.json', JSON.stringify(sampleData), {
            encoding: 'utf-8',
        })
    } catch (err) {
        console.log('An error occured!')
        console.log(err)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
