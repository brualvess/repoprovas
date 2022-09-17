import { prisma } from '../src/database';
async function main() {
    const datasCategory = {
        name: 'Projeto'
    }
    const datasTeacher = {
        name: 'Bruna Hamori'
    }
    const datasTerms = {
        number: 2
    }
    const datasDisciplines = {
        name: 'JavaSCript',
        termId: 1
    }

    await prisma.categories.upsert({
        where: { name: datasCategory.name },
        update: {},
        create: datasCategory
    })
    await prisma.teachers.upsert({
        where: { name: datasTeacher.name },
        update: {},
        create: datasTeacher
    })
    await prisma.terms.upsert({
        where: { number: datasTerms.number },
        update: {},
        create: datasTerms
    })
    await prisma.disciplines.upsert({
        where: { name: datasDisciplines.name },
        update: {},
        create: datasDisciplines
    })

}
main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(()=> prisma.$disconnect())
