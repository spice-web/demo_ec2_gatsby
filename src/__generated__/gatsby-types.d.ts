/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldSelector;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldSelector;
};

type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type EventsJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publicURL: Maybe<File>;
};

type EventsJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<EventsJsonEdge>;
  readonly group: ReadonlyArray<EventsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<EventsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type EventsJsonConnection_distinctArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonConnection_groupArgs = {
  field: EventsJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type EventsJsonConnection_maxArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonConnection_minArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonConnection_sumArgs = {
  field: EventsJsonFieldSelector;
};

type EventsJsonEdge = {
  readonly next: Maybe<EventsJson>;
  readonly node: EventsJson;
  readonly previous: Maybe<EventsJson>;
};

type EventsJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publicURL: InputMaybe<FileFieldSelector>;
};

type EventsJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publicURL: InputMaybe<FileFilterInput>;
};

type EventsJsonFilterListInput = {
  readonly elemMatch: InputMaybe<EventsJsonFilterInput>;
};

type EventsJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<EventsJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<EventsJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<EventsJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type EventsJsonGroupConnection_distinctArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonGroupConnection_groupArgs = {
  field: EventsJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type EventsJsonGroupConnection_maxArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonGroupConnection_minArgs = {
  field: EventsJsonFieldSelector;
};


type EventsJsonGroupConnection_sumArgs = {
  field: EventsJsonFieldSelector;
};

type EventsJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publicURL: InputMaybe<FileSortInput>;
};

type FaqArrivalJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contents: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
};

type FaqArrivalJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqArrivalJsonEdge>;
  readonly group: ReadonlyArray<FaqArrivalJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqArrivalJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqArrivalJsonConnection_distinctArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonConnection_groupArgs = {
  field: FaqArrivalJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqArrivalJsonConnection_maxArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonConnection_minArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonConnection_sumArgs = {
  field: FaqArrivalJsonFieldSelector;
};

type FaqArrivalJsonEdge = {
  readonly next: Maybe<FaqArrivalJson>;
  readonly node: FaqArrivalJson;
  readonly previous: Maybe<FaqArrivalJson>;
};

type FaqArrivalJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contents: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type FaqArrivalJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contents: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type FaqArrivalJsonFilterListInput = {
  readonly elemMatch: InputMaybe<FaqArrivalJsonFilterInput>;
};

type FaqArrivalJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqArrivalJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FaqArrivalJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqArrivalJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqArrivalJsonGroupConnection_distinctArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonGroupConnection_groupArgs = {
  field: FaqArrivalJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqArrivalJsonGroupConnection_maxArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonGroupConnection_minArgs = {
  field: FaqArrivalJsonFieldSelector;
};


type FaqArrivalJsonGroupConnection_sumArgs = {
  field: FaqArrivalJsonFieldSelector;
};

type FaqArrivalJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contents: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type FaqDepartureJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contents: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
};

type FaqDepartureJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqDepartureJsonEdge>;
  readonly group: ReadonlyArray<FaqDepartureJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqDepartureJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqDepartureJsonConnection_distinctArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonConnection_groupArgs = {
  field: FaqDepartureJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqDepartureJsonConnection_maxArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonConnection_minArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonConnection_sumArgs = {
  field: FaqDepartureJsonFieldSelector;
};

type FaqDepartureJsonEdge = {
  readonly next: Maybe<FaqDepartureJson>;
  readonly node: FaqDepartureJson;
  readonly previous: Maybe<FaqDepartureJson>;
};

type FaqDepartureJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contents: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type FaqDepartureJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contents: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type FaqDepartureJsonFilterListInput = {
  readonly elemMatch: InputMaybe<FaqDepartureJsonFilterInput>;
};

type FaqDepartureJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqDepartureJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FaqDepartureJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqDepartureJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqDepartureJsonGroupConnection_distinctArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonGroupConnection_groupArgs = {
  field: FaqDepartureJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqDepartureJsonGroupConnection_maxArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonGroupConnection_minArgs = {
  field: FaqDepartureJsonFieldSelector;
};


type FaqDepartureJsonGroupConnection_sumArgs = {
  field: FaqDepartureJsonFieldSelector;
};

type FaqDepartureJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contents: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type FaqOtherJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contents: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly link: Maybe<Scalars['String']>;
  readonly more: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type FaqOtherJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqOtherJsonEdge>;
  readonly group: ReadonlyArray<FaqOtherJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqOtherJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqOtherJsonConnection_distinctArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonConnection_groupArgs = {
  field: FaqOtherJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqOtherJsonConnection_maxArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonConnection_minArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonConnection_sumArgs = {
  field: FaqOtherJsonFieldSelector;
};

type FaqOtherJsonEdge = {
  readonly next: Maybe<FaqOtherJson>;
  readonly node: FaqOtherJson;
  readonly previous: Maybe<FaqOtherJson>;
};

type FaqOtherJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contents: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly more: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type FaqOtherJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contents: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly more: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FaqOtherJsonFilterListInput = {
  readonly elemMatch: InputMaybe<FaqOtherJsonFilterInput>;
};

type FaqOtherJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqOtherJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FaqOtherJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqOtherJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqOtherJsonGroupConnection_distinctArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonGroupConnection_groupArgs = {
  field: FaqOtherJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqOtherJsonGroupConnection_maxArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonGroupConnection_minArgs = {
  field: FaqOtherJsonFieldSelector;
};


type FaqOtherJsonGroupConnection_sumArgs = {
  field: FaqOtherJsonFieldSelector;
};

type FaqOtherJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contents: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly more: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type FaqPaymentJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contents: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly link: Maybe<Scalars['String']>;
  readonly more: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type FaqPaymentJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqPaymentJsonEdge>;
  readonly group: ReadonlyArray<FaqPaymentJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqPaymentJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqPaymentJsonConnection_distinctArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonConnection_groupArgs = {
  field: FaqPaymentJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqPaymentJsonConnection_maxArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonConnection_minArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonConnection_sumArgs = {
  field: FaqPaymentJsonFieldSelector;
};

type FaqPaymentJsonEdge = {
  readonly next: Maybe<FaqPaymentJson>;
  readonly node: FaqPaymentJson;
  readonly previous: Maybe<FaqPaymentJson>;
};

type FaqPaymentJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contents: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly link: InputMaybe<FieldSelectorEnum>;
  readonly more: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

type FaqPaymentJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contents: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly link: InputMaybe<StringQueryOperatorInput>;
  readonly more: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FaqPaymentJsonFilterListInput = {
  readonly elemMatch: InputMaybe<FaqPaymentJsonFilterInput>;
};

type FaqPaymentJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqPaymentJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FaqPaymentJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqPaymentJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqPaymentJsonGroupConnection_distinctArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonGroupConnection_groupArgs = {
  field: FaqPaymentJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqPaymentJsonGroupConnection_maxArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonGroupConnection_minArgs = {
  field: FaqPaymentJsonFieldSelector;
};


type FaqPaymentJsonGroupConnection_sumArgs = {
  field: FaqPaymentJsonFieldSelector;
};

type FaqPaymentJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contents: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly link: InputMaybe<SortOrderEnum>;
  readonly more: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

type FaqReserveJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contents: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']>;
};

type FaqReserveJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqReserveJsonEdge>;
  readonly group: ReadonlyArray<FaqReserveJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqReserveJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqReserveJsonConnection_distinctArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonConnection_groupArgs = {
  field: FaqReserveJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqReserveJsonConnection_maxArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonConnection_minArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonConnection_sumArgs = {
  field: FaqReserveJsonFieldSelector;
};

type FaqReserveJsonEdge = {
  readonly next: Maybe<FaqReserveJson>;
  readonly node: FaqReserveJson;
  readonly previous: Maybe<FaqReserveJson>;
};

type FaqReserveJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contents: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type FaqReserveJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contents: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type FaqReserveJsonFilterListInput = {
  readonly elemMatch: InputMaybe<FaqReserveJsonFilterInput>;
};

type FaqReserveJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FaqReserveJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FaqReserveJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<FaqReserveJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FaqReserveJsonGroupConnection_distinctArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonGroupConnection_groupArgs = {
  field: FaqReserveJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FaqReserveJsonGroupConnection_maxArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonGroupConnection_minArgs = {
  field: FaqReserveJsonFieldSelector;
};


type FaqReserveJsonGroupConnection_sumArgs = {
  field: FaqReserveJsonFieldSelector;
};

type FaqReserveJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contents: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type FieldSelectorEnum =
  | 'SELECT';

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type EventsJson or null if there are no children of given type on this node */
  readonly childEventsJson: Maybe<EventsJson>;
  /** Returns the first child node of type FaqArrivalJson or null if there are no children of given type on this node */
  readonly childFaqArrivalJson: Maybe<FaqArrivalJson>;
  /** Returns the first child node of type FaqDepartureJson or null if there are no children of given type on this node */
  readonly childFaqDepartureJson: Maybe<FaqDepartureJson>;
  /** Returns the first child node of type FaqOtherJson or null if there are no children of given type on this node */
  readonly childFaqOtherJson: Maybe<FaqOtherJson>;
  /** Returns the first child node of type FaqPaymentJson or null if there are no children of given type on this node */
  readonly childFaqPaymentJson: Maybe<FaqPaymentJson>;
  /** Returns the first child node of type FaqReserveJson or null if there are no children of given type on this node */
  readonly childFaqReserveJson: Maybe<FaqReserveJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type PriceChartJson or null if there are no children of given type on this node */
  readonly childPriceChartJson: Maybe<PriceChartJson>;
  /** Returns the first child node of type SliderJson or null if there are no children of given type on this node */
  readonly childSliderJson: Maybe<SliderJson>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type EventsJson */
  readonly childrenEventsJson: Maybe<ReadonlyArray<Maybe<EventsJson>>>;
  /** Returns all children nodes filtered by type FaqArrivalJson */
  readonly childrenFaqArrivalJson: Maybe<ReadonlyArray<Maybe<FaqArrivalJson>>>;
  /** Returns all children nodes filtered by type FaqDepartureJson */
  readonly childrenFaqDepartureJson: Maybe<ReadonlyArray<Maybe<FaqDepartureJson>>>;
  /** Returns all children nodes filtered by type FaqOtherJson */
  readonly childrenFaqOtherJson: Maybe<ReadonlyArray<Maybe<FaqOtherJson>>>;
  /** Returns all children nodes filtered by type FaqPaymentJson */
  readonly childrenFaqPaymentJson: Maybe<ReadonlyArray<Maybe<FaqPaymentJson>>>;
  /** Returns all children nodes filtered by type FaqReserveJson */
  readonly childrenFaqReserveJson: Maybe<ReadonlyArray<Maybe<FaqReserveJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type PriceChartJson */
  readonly childrenPriceChartJson: Maybe<ReadonlyArray<Maybe<PriceChartJson>>>;
  /** Returns all children nodes filtered by type SliderJson */
  readonly childrenSliderJson: Maybe<ReadonlyArray<Maybe<SliderJson>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileConnection_minArgs = {
  field: FileFieldSelector;
};


type FileConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childEventsJson: InputMaybe<EventsJsonFieldSelector>;
  readonly childFaqArrivalJson: InputMaybe<FaqArrivalJsonFieldSelector>;
  readonly childFaqDepartureJson: InputMaybe<FaqDepartureJsonFieldSelector>;
  readonly childFaqOtherJson: InputMaybe<FaqOtherJsonFieldSelector>;
  readonly childFaqPaymentJson: InputMaybe<FaqPaymentJsonFieldSelector>;
  readonly childFaqReserveJson: InputMaybe<FaqReserveJsonFieldSelector>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childPriceChartJson: InputMaybe<PriceChartJsonFieldSelector>;
  readonly childSliderJson: InputMaybe<SliderJsonFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenEventsJson: InputMaybe<EventsJsonFieldSelector>;
  readonly childrenFaqArrivalJson: InputMaybe<FaqArrivalJsonFieldSelector>;
  readonly childrenFaqDepartureJson: InputMaybe<FaqDepartureJsonFieldSelector>;
  readonly childrenFaqOtherJson: InputMaybe<FaqOtherJsonFieldSelector>;
  readonly childrenFaqPaymentJson: InputMaybe<FaqPaymentJsonFieldSelector>;
  readonly childrenFaqReserveJson: InputMaybe<FaqReserveJsonFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childrenPriceChartJson: InputMaybe<PriceChartJsonFieldSelector>;
  readonly childrenSliderJson: InputMaybe<SliderJsonFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly publicURL: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childEventsJson: InputMaybe<EventsJsonFilterInput>;
  readonly childFaqArrivalJson: InputMaybe<FaqArrivalJsonFilterInput>;
  readonly childFaqDepartureJson: InputMaybe<FaqDepartureJsonFilterInput>;
  readonly childFaqOtherJson: InputMaybe<FaqOtherJsonFilterInput>;
  readonly childFaqPaymentJson: InputMaybe<FaqPaymentJsonFilterInput>;
  readonly childFaqReserveJson: InputMaybe<FaqReserveJsonFilterInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly childPriceChartJson: InputMaybe<PriceChartJsonFilterInput>;
  readonly childSliderJson: InputMaybe<SliderJsonFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenEventsJson: InputMaybe<EventsJsonFilterListInput>;
  readonly childrenFaqArrivalJson: InputMaybe<FaqArrivalJsonFilterListInput>;
  readonly childrenFaqDepartureJson: InputMaybe<FaqDepartureJsonFilterListInput>;
  readonly childrenFaqOtherJson: InputMaybe<FaqOtherJsonFilterListInput>;
  readonly childrenFaqPaymentJson: InputMaybe<FaqPaymentJsonFilterListInput>;
  readonly childrenFaqReserveJson: InputMaybe<FaqReserveJsonFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenPriceChartJson: InputMaybe<PriceChartJsonFilterListInput>;
  readonly childrenSliderJson: InputMaybe<SliderJsonFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_minArgs = {
  field: FileFieldSelector;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldSelector;
};

type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childEventsJson: InputMaybe<EventsJsonSortInput>;
  readonly childFaqArrivalJson: InputMaybe<FaqArrivalJsonSortInput>;
  readonly childFaqDepartureJson: InputMaybe<FaqDepartureJsonSortInput>;
  readonly childFaqOtherJson: InputMaybe<FaqOtherJsonSortInput>;
  readonly childFaqPaymentJson: InputMaybe<FaqPaymentJsonSortInput>;
  readonly childFaqReserveJson: InputMaybe<FaqReserveJsonSortInput>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childPriceChartJson: InputMaybe<PriceChartJsonSortInput>;
  readonly childSliderJson: InputMaybe<SliderJsonSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenEventsJson: InputMaybe<EventsJsonSortInput>;
  readonly childrenFaqArrivalJson: InputMaybe<FaqArrivalJsonSortInput>;
  readonly childrenFaqDepartureJson: InputMaybe<FaqDepartureJsonSortInput>;
  readonly childrenFaqOtherJson: InputMaybe<FaqOtherJsonSortInput>;
  readonly childrenFaqPaymentJson: InputMaybe<FaqPaymentJsonSortInput>;
  readonly childrenFaqReserveJson: InputMaybe<FaqReserveJsonSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childrenPriceChartJson: InputMaybe<PriceChartJsonSortInput>;
  readonly childrenSliderJson: InputMaybe<SliderJsonSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly publicURL: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFixedSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly originalImg: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpFluidSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly originalImg: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly presentationHeight: InputMaybe<SortOrderEnum>;
  readonly presentationWidth: InputMaybe<SortOrderEnum>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldSelector;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldSelector;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpOriginalSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpResizeSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

type ImageSharpSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly original: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly resize: InputMaybe<ImageSharpResizeSortInput>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

type MicrocmsCategory = Node & {
  readonly category: Maybe<Scalars['String']>;
  readonly categoryId: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly revisedAt: Maybe<Scalars['Date']>;
  readonly sortIndex: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type MicrocmsCategory_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsCategory_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsCategory_revisedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsCategory_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type MicrocmsCategoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsCategoryEdge>;
  readonly group: ReadonlyArray<MicrocmsCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsCategoryConnection_distinctArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryConnection_groupArgs = {
  field: MicrocmsCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsCategoryConnection_maxArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryConnection_minArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryConnection_sumArgs = {
  field: MicrocmsCategoryFieldSelector;
};

type MicrocmsCategoryEdge = {
  readonly next: Maybe<MicrocmsCategory>;
  readonly node: MicrocmsCategory;
  readonly previous: Maybe<MicrocmsCategory>;
};

type MicrocmsCategoryFieldSelector = {
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly categoryId: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly revisedAt: InputMaybe<FieldSelectorEnum>;
  readonly sortIndex: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type MicrocmsCategoryFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly categoryId: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly revisedAt: InputMaybe<DateQueryOperatorInput>;
  readonly sortIndex: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type MicrocmsCategoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsCategoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MicrocmsCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsCategoryGroupConnection_distinctArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryGroupConnection_groupArgs = {
  field: MicrocmsCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsCategoryGroupConnection_maxArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryGroupConnection_minArgs = {
  field: MicrocmsCategoryFieldSelector;
};


type MicrocmsCategoryGroupConnection_sumArgs = {
  field: MicrocmsCategoryFieldSelector;
};

type MicrocmsCategorySortInput = {
  readonly category: InputMaybe<SortOrderEnum>;
  readonly categoryId: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly revisedAt: InputMaybe<SortOrderEnum>;
  readonly sortIndex: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type MicrocmsInformation = Node & {
  readonly body: Maybe<Scalars['String']>;
  readonly category: Maybe<MicrocmsInformationCategory>;
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly informationId: Maybe<Scalars['String']>;
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly revisedAt: Maybe<Scalars['Date']>;
  readonly sortIndex: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type MicrocmsInformation_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformation_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformation_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformation_revisedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformation_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type MicrocmsInformationCategory = {
  readonly category: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly revisedAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type MicrocmsInformationCategory_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformationCategory_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformationCategory_revisedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsInformationCategory_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type MicrocmsInformationCategoryFieldSelector = {
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly revisedAt: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type MicrocmsInformationCategoryFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly revisedAt: InputMaybe<DateQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type MicrocmsInformationCategorySortInput = {
  readonly category: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly revisedAt: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type MicrocmsInformationConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsInformationEdge>;
  readonly group: ReadonlyArray<MicrocmsInformationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsInformation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsInformationConnection_distinctArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationConnection_groupArgs = {
  field: MicrocmsInformationFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsInformationConnection_maxArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationConnection_minArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationConnection_sumArgs = {
  field: MicrocmsInformationFieldSelector;
};

type MicrocmsInformationEdge = {
  readonly next: Maybe<MicrocmsInformation>;
  readonly node: MicrocmsInformation;
  readonly previous: Maybe<MicrocmsInformation>;
};

type MicrocmsInformationFieldSelector = {
  readonly body: InputMaybe<FieldSelectorEnum>;
  readonly category: InputMaybe<MicrocmsInformationCategoryFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly informationId: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly revisedAt: InputMaybe<FieldSelectorEnum>;
  readonly sortIndex: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

type MicrocmsInformationFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly category: InputMaybe<MicrocmsInformationCategoryFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly informationId: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly revisedAt: InputMaybe<DateQueryOperatorInput>;
  readonly sortIndex: InputMaybe<IntQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type MicrocmsInformationGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsInformationEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MicrocmsInformationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsInformation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsInformationGroupConnection_distinctArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationGroupConnection_groupArgs = {
  field: MicrocmsInformationFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsInformationGroupConnection_maxArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationGroupConnection_minArgs = {
  field: MicrocmsInformationFieldSelector;
};


type MicrocmsInformationGroupConnection_sumArgs = {
  field: MicrocmsInformationFieldSelector;
};

type MicrocmsInformationSortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly category: InputMaybe<MicrocmsInformationCategorySortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly informationId: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly revisedAt: InputMaybe<SortOrderEnum>;
  readonly sortIndex: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

type MicrocmsVoice = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly number: Maybe<Scalars['Int']>;
  readonly parent: Maybe<Node>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly reply: Maybe<Scalars['String']>;
  readonly revisedAt: Maybe<Scalars['Date']>;
  readonly sortIndex: Maybe<Scalars['Int']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly user_voice: Maybe<Scalars['String']>;
  readonly voiceId: Maybe<Scalars['String']>;
};


type MicrocmsVoice_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsVoice_publishedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsVoice_revisedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type MicrocmsVoice_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type MicrocmsVoiceConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsVoiceEdge>;
  readonly group: ReadonlyArray<MicrocmsVoiceGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsVoice>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsVoiceConnection_distinctArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceConnection_groupArgs = {
  field: MicrocmsVoiceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsVoiceConnection_maxArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceConnection_minArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceConnection_sumArgs = {
  field: MicrocmsVoiceFieldSelector;
};

type MicrocmsVoiceEdge = {
  readonly next: Maybe<MicrocmsVoice>;
  readonly node: MicrocmsVoice;
  readonly previous: Maybe<MicrocmsVoice>;
};

type MicrocmsVoiceFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly number: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly publishedAt: InputMaybe<FieldSelectorEnum>;
  readonly reply: InputMaybe<FieldSelectorEnum>;
  readonly revisedAt: InputMaybe<FieldSelectorEnum>;
  readonly sortIndex: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly user_voice: InputMaybe<FieldSelectorEnum>;
  readonly voiceId: InputMaybe<FieldSelectorEnum>;
};

type MicrocmsVoiceFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly number: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
  readonly reply: InputMaybe<StringQueryOperatorInput>;
  readonly revisedAt: InputMaybe<DateQueryOperatorInput>;
  readonly sortIndex: InputMaybe<IntQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly user_voice: InputMaybe<StringQueryOperatorInput>;
  readonly voiceId: InputMaybe<StringQueryOperatorInput>;
};

type MicrocmsVoiceGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MicrocmsVoiceEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MicrocmsVoiceGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MicrocmsVoice>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MicrocmsVoiceGroupConnection_distinctArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceGroupConnection_groupArgs = {
  field: MicrocmsVoiceFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MicrocmsVoiceGroupConnection_maxArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceGroupConnection_minArgs = {
  field: MicrocmsVoiceFieldSelector;
};


type MicrocmsVoiceGroupConnection_sumArgs = {
  field: MicrocmsVoiceFieldSelector;
};

type MicrocmsVoiceSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly number: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly publishedAt: InputMaybe<SortOrderEnum>;
  readonly reply: InputMaybe<SortOrderEnum>;
  readonly revisedAt: InputMaybe<SortOrderEnum>;
  readonly sortIndex: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly user_voice: InputMaybe<SortOrderEnum>;
  readonly voiceId: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type PriceChartJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly data: Maybe<PriceChartJsonData>;
  readonly date: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly price: Maybe<Scalars['String']>;
  readonly sale: Maybe<Scalars['String']>;
};

type PriceChartJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PriceChartJsonEdge>;
  readonly group: ReadonlyArray<PriceChartJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PriceChartJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PriceChartJsonConnection_distinctArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonConnection_groupArgs = {
  field: PriceChartJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PriceChartJsonConnection_maxArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonConnection_minArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonConnection_sumArgs = {
  field: PriceChartJsonFieldSelector;
};

type PriceChartJsonData = {
  readonly keytext: Maybe<Scalars['String']>;
};

type PriceChartJsonDataFieldSelector = {
  readonly keytext: InputMaybe<FieldSelectorEnum>;
};

type PriceChartJsonDataFilterInput = {
  readonly keytext: InputMaybe<StringQueryOperatorInput>;
};

type PriceChartJsonDataSortInput = {
  readonly keytext: InputMaybe<SortOrderEnum>;
};

type PriceChartJsonEdge = {
  readonly next: Maybe<PriceChartJson>;
  readonly node: PriceChartJson;
  readonly previous: Maybe<PriceChartJson>;
};

type PriceChartJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly data: InputMaybe<PriceChartJsonDataFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly display: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly price: InputMaybe<FieldSelectorEnum>;
  readonly sale: InputMaybe<FieldSelectorEnum>;
};

type PriceChartJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PriceChartJsonDataFilterInput>;
  readonly date: InputMaybe<StringQueryOperatorInput>;
  readonly display: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly price: InputMaybe<StringQueryOperatorInput>;
  readonly sale: InputMaybe<StringQueryOperatorInput>;
};

type PriceChartJsonFilterListInput = {
  readonly elemMatch: InputMaybe<PriceChartJsonFilterInput>;
};

type PriceChartJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PriceChartJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PriceChartJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PriceChartJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PriceChartJsonGroupConnection_distinctArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonGroupConnection_groupArgs = {
  field: PriceChartJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PriceChartJsonGroupConnection_maxArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonGroupConnection_minArgs = {
  field: PriceChartJsonFieldSelector;
};


type PriceChartJsonGroupConnection_sumArgs = {
  field: PriceChartJsonFieldSelector;
};

type PriceChartJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly data: InputMaybe<PriceChartJsonDataSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly display: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly price: InputMaybe<SortOrderEnum>;
  readonly sale: InputMaybe<SortOrderEnum>;
};

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allEventsJson: EventsJsonConnection;
  readonly allFaqArrivalJson: FaqArrivalJsonConnection;
  readonly allFaqDepartureJson: FaqDepartureJsonConnection;
  readonly allFaqOtherJson: FaqOtherJsonConnection;
  readonly allFaqPaymentJson: FaqPaymentJsonConnection;
  readonly allFaqReserveJson: FaqReserveJsonConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMicrocmsCategory: MicrocmsCategoryConnection;
  readonly allMicrocmsInformation: MicrocmsInformationConnection;
  readonly allMicrocmsVoice: MicrocmsVoiceConnection;
  readonly allPriceChartJson: PriceChartJsonConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allSliderJson: SliderJsonConnection;
  readonly directory: Maybe<Directory>;
  readonly eventsJson: Maybe<EventsJson>;
  readonly faqArrivalJson: Maybe<FaqArrivalJson>;
  readonly faqDepartureJson: Maybe<FaqDepartureJson>;
  readonly faqOtherJson: Maybe<FaqOtherJson>;
  readonly faqPaymentJson: Maybe<FaqPaymentJson>;
  readonly faqReserveJson: Maybe<FaqReserveJson>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly microcmsCategory: Maybe<MicrocmsCategory>;
  readonly microcmsInformation: Maybe<MicrocmsInformation>;
  readonly microcmsVoice: Maybe<MicrocmsVoice>;
  readonly priceChartJson: Maybe<PriceChartJson>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly sliderJson: Maybe<SliderJson>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


type Query_allEventsJsonArgs = {
  filter: InputMaybe<EventsJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<EventsJsonSortInput>>>;
};


type Query_allFaqArrivalJsonArgs = {
  filter: InputMaybe<FaqArrivalJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FaqArrivalJsonSortInput>>>;
};


type Query_allFaqDepartureJsonArgs = {
  filter: InputMaybe<FaqDepartureJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FaqDepartureJsonSortInput>>>;
};


type Query_allFaqOtherJsonArgs = {
  filter: InputMaybe<FaqOtherJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FaqOtherJsonSortInput>>>;
};


type Query_allFaqPaymentJsonArgs = {
  filter: InputMaybe<FaqPaymentJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FaqPaymentJsonSortInput>>>;
};


type Query_allFaqReserveJsonArgs = {
  filter: InputMaybe<FaqReserveJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FaqReserveJsonSortInput>>>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


type Query_allMicrocmsCategoryArgs = {
  filter: InputMaybe<MicrocmsCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MicrocmsCategorySortInput>>>;
};


type Query_allMicrocmsInformationArgs = {
  filter: InputMaybe<MicrocmsInformationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MicrocmsInformationSortInput>>>;
};


type Query_allMicrocmsVoiceArgs = {
  filter: InputMaybe<MicrocmsVoiceFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MicrocmsVoiceSortInput>>>;
};


type Query_allPriceChartJsonArgs = {
  filter: InputMaybe<PriceChartJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<PriceChartJsonSortInput>>>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


type Query_allSliderJsonArgs = {
  filter: InputMaybe<SliderJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SliderJsonSortInput>>>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_eventsJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publicURL: InputMaybe<FileFilterInput>;
};


type Query_faqArrivalJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contents: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_faqDepartureJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contents: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_faqOtherJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contents: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  more: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_faqPaymentJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contents: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<StringQueryOperatorInput>;
  more: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_faqReserveJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contents: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childEventsJson: InputMaybe<EventsJsonFilterInput>;
  childFaqArrivalJson: InputMaybe<FaqArrivalJsonFilterInput>;
  childFaqDepartureJson: InputMaybe<FaqDepartureJsonFilterInput>;
  childFaqOtherJson: InputMaybe<FaqOtherJsonFilterInput>;
  childFaqPaymentJson: InputMaybe<FaqPaymentJsonFilterInput>;
  childFaqReserveJson: InputMaybe<FaqReserveJsonFilterInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childPriceChartJson: InputMaybe<PriceChartJsonFilterInput>;
  childSliderJson: InputMaybe<SliderJsonFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenEventsJson: InputMaybe<EventsJsonFilterListInput>;
  childrenFaqArrivalJson: InputMaybe<FaqArrivalJsonFilterListInput>;
  childrenFaqDepartureJson: InputMaybe<FaqDepartureJsonFilterListInput>;
  childrenFaqOtherJson: InputMaybe<FaqOtherJsonFilterListInput>;
  childrenFaqPaymentJson: InputMaybe<FaqPaymentJsonFilterListInput>;
  childrenFaqReserveJson: InputMaybe<FaqReserveJsonFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenPriceChartJson: InputMaybe<PriceChartJsonFilterListInput>;
  childrenSliderJson: InputMaybe<SliderJsonFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_microcmsCategoryArgs = {
  category: InputMaybe<StringQueryOperatorInput>;
  categoryId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  revisedAt: InputMaybe<DateQueryOperatorInput>;
  sortIndex: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_microcmsInformationArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  category: InputMaybe<MicrocmsInformationCategoryFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  informationId: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  revisedAt: InputMaybe<DateQueryOperatorInput>;
  sortIndex: InputMaybe<IntQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_microcmsVoiceArgs = {
  children: InputMaybe<NodeFilterListInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  number: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishedAt: InputMaybe<DateQueryOperatorInput>;
  reply: InputMaybe<StringQueryOperatorInput>;
  revisedAt: InputMaybe<DateQueryOperatorInput>;
  sortIndex: InputMaybe<IntQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  user_voice: InputMaybe<StringQueryOperatorInput>;
  voiceId: InputMaybe<StringQueryOperatorInput>;
};


type Query_priceChartJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PriceChartJsonDataFilterInput>;
  date: InputMaybe<StringQueryOperatorInput>;
  display: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  price: InputMaybe<StringQueryOperatorInput>;
  sale: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


type Query_sliderJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  link: InputMaybe<SliderJsonLinkFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldSelector;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<FieldSelectorEnum>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldSelector;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldSelector;
};

type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldSelector;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldSelector;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldSelector;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldSelector;
};

type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldSelector;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldSelector;
};

type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

type SiteSiteMetadata = {
  readonly author: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFieldSelector = {
  readonly author: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

type SiteSiteMetadataFilterInput = {
  readonly author: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSortInput = {
  readonly author: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SortOrderEnum>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

type SliderJson = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly link: Maybe<SliderJsonLink>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

type SliderJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SliderJsonEdge>;
  readonly group: ReadonlyArray<SliderJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SliderJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SliderJsonConnection_distinctArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonConnection_groupArgs = {
  field: SliderJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SliderJsonConnection_maxArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonConnection_minArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonConnection_sumArgs = {
  field: SliderJsonFieldSelector;
};

type SliderJsonEdge = {
  readonly next: Maybe<SliderJson>;
  readonly node: SliderJson;
  readonly previous: Maybe<SliderJson>;
};

type SliderJsonFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly link: InputMaybe<SliderJsonLinkFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

type SliderJsonFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly link: InputMaybe<SliderJsonLinkFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SliderJsonFilterListInput = {
  readonly elemMatch: InputMaybe<SliderJsonFilterInput>;
};

type SliderJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SliderJsonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SliderJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SliderJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SliderJsonGroupConnection_distinctArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonGroupConnection_groupArgs = {
  field: SliderJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SliderJsonGroupConnection_maxArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonGroupConnection_minArgs = {
  field: SliderJsonFieldSelector;
};


type SliderJsonGroupConnection_sumArgs = {
  field: SliderJsonFieldSelector;
};

type SliderJsonLink = {
  readonly href: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
};

type SliderJsonLinkFieldSelector = {
  readonly href: InputMaybe<FieldSelectorEnum>;
  readonly text: InputMaybe<FieldSelectorEnum>;
};

type SliderJsonLinkFilterInput = {
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
};

type SliderJsonLinkSortInput = {
  readonly href: InputMaybe<SortOrderEnum>;
  readonly text: InputMaybe<SortOrderEnum>;
};

type SliderJsonSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly link: InputMaybe<SliderJsonLinkSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


type SiteTitleQueryQuery = { readonly site: { readonly siteMetadata: { readonly title: string | null } | null } | null };


}
